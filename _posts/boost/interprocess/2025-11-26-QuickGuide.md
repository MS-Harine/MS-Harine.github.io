---
title: "Boost.Interprocess - 빠른 가이드 (Quick Guide for Impatient)"
date: 2025-11-25 23:00:00 +09
categories: [Boost]
tags: [c++, boost]
math: false
toc: true
pin: false
# image:
#   path: thumbnail.png
#   alt: image alternative text
---

> 개인 공부를 위해 번역한 내용으로, 정확하지 않을 수 있습니다. \
> Boost 1.86.0 버전을 기반으로 합니다. \
> 자세한 정보는 [공식 사이트](https://www.boost.org/doc/libs/1_86_0/doc/html/interprocess.html)를 참고해주세요
{: .prompt-info }

## 공유 메모리를 이름 없는 메모리 블럭 풀로 사용하기

1. 공유 메모리의 일부를 할당하고,
2. 메세지를 해당 버퍼에 복사한 후
3. 다른 프로세스에게 해당 공유 메모리의 오프셋을 전송하면 됩니다.

예제를 보시죠

``` c++
#include <boost/interprocess/managed_shared_memory.hpp>
#include <cstdlib> // std::system
#include <sstream>

int main (int argc, char *argv[])
{
    using namespace boost::interprocess;
    if (argc == 1) {  // Parent process
        // Remove shared memory on construction and destruction
        // 관련 내용은 RAII (Resource Acquisition Is Initialization) 디자인 패턴 참고
        struct shm_remove
        {
            shm_remove() {  shared_memory_object::remove("MySharedMemory"); }
            ~shm_remove(){  shared_memory_object::remove("MySharedMemory"); }
        } remover;

        // Create a managed shared memory segment
        managed_shared_memory segment(create_only, "MySharedMemory", 65536);

        // Allocate a portion of the segment (raw memory)
        managed_shared_memory::size_type free_memory = segment.get_free_memory();
        void *shptr = segment.allocate(1024/*bytes to allocate*/);

        // Check invariant
        if (free_memory <= segment.get_free_memory())
            return 1;

        // An handle from the base address can identify any byte of the shared
        // memory segment even if it is mapped in different base addresses
        managed_shared_memory::handle_t handle = segment.get_handle_from_address(shptr);
        std::stringstream s;
        s << argv[0] << " " << handle;
        s << std::ends;

        // Launch child process
        if (0 != std::system(s.str().c_str()))
            return 1;

        // Check memory has been freed
        if (free_memory != segment.get_free_memory())
            return 1;
    }
    else{
        // Open managed segment
        managed_shared_memory segment(open_only, "MySharedMemory");

        // An handle from the base address can identify any byte of the shared
        // memory segment even if it is mapped in different base addresses
        managed_shared_memory::handle_t handle = 0;

        // Obtain handle value
        std::stringstream s;
        s << argv[1];
        s >> handle;

        // Get buffer local address from handle
        void *msg = segment.get_address_from_handle(handle);

        // Deallocate previously allocated memory
        segment.deallocate(msg);
    }
    return 0;
}
```

## 이름 있는 공유 메모리 객체 생성하기

이름이 있는 공유 메모리 객체를 생성하여 다른 프로세스가 찾고, 사용하며, 쓸모없을 때 삭제할 수 있습니다.

예제 : 

``` c++
#include <boost/interprocess/managed_shared_memory.hpp>
#include <cstdlib> // std::system
#include <cstddef>
#include <cassert>
#include <utility>

int main(int argc, char *argv[])
{
    using namespace boost::interprocess;
    typedef std::pair<double, int> MyType;

    if (argc == 1) {  // Parent process
        // Remove shared memory on construction and destruction
        struct shm_remove
        {
            shm_remove() { shared_memory_object::remove("MySharedMemory"); }
            ~shm_remove(){ shared_memory_object::remove("MySharedMemory"); }
        } remover;

        // Construct managed shared memory
        managed_shared_memory segment(create_only, "MySharedMemory", 65536);

        // Create an object of MyType initialized to {0.0, 0}
        MyType *instance = segment.construct<MyType>
            ("MyType instance")  // name of the object
            (0.0, 0);            // ctor first argument

        // Create an array of 10 elements of MyType initialized to {0.0, 0}
        MyType *array = segment.construct<MyType>
            ("MyType array")     // name of the object
            [10]                 // number of elements
            (0.0, 0);            // Same two ctor arguments for all objects

        // Create an array of 3 elements of MyType initializing each one
        // to a different value {0.0, 0}, {1.0, 1}, {2.0, 2}...
        float float_initializer[3] = { 0.0, 1.0, 2.0 };
        int   int_initializer[3]   = { 0, 1, 2 };

        MyType *array_it = segment.construct_it<MyType>
            ("MyType array from it")   // name of the object
            [3]                        // number of elements
            ( &float_initializer[0]    // Iterator for the 1st ctor argument
            , &int_initializer[0]);    // Iterator for the 2nd ctor argument

        // Launch child process
        std::string s(argv[0]);
        s += " child ";
        if (0 != std::system(s.c_str()))
            return 1;

        // Check child has destroyed all objects
        if (segment.find<MyType>("MyType array").first ||
            segment.find<MyType>("MyType instance").first ||
            segment.find<MyType>("MyType array from it").first)
            return 1;
    }
    else{
        // Open managed shared memory
        managed_shared_memory segment(open_only, "MySharedMemory");

        std::pair<MyType*, managed_shared_memory::size_type> res;

        // Find the array
        res = segment.find<MyType> ("MyType array");
        // Length should be 10
        if (res.second != 10)
            return 1;

        // Find the object
        res = segment.find<MyType> ("MyType instance");
        // Length should be 1
        if (res.second != 1)
            return 1;

        // Find the array constructed from iterators
        res = segment.find<MyType> ("MyType array from it");
        // Length should be 3
        if (res.second != 3)
            return 1;

        // We're done, delete all the objects
        segment.destroy<MyType>("MyType array");
        segment.destroy<MyType>("MyType instance");
        segment.destroy<MyType>("MyType array from it");
    }
    return 0;
}
```

## 공유 메모리에 Offset smart pointer 사용하기

**Boost.Interprocess**는 offset pointer 자체의 주소와 가리키는 객체의 주소값의 거리를 저장하는 offset pointer로써 `offset_ptr` 스마트 포인터 종류를 제공합니다.
`offset_ptr`이 공유 메모리 세그먼트에 있을 때 같은 공유 메모리 세그먼트에 있는 객체를 안전하게 가르킬 수 있습니다.
해당 세그먼트가 다른 프로세스의 다른 base address에 매칭되더라도 말이죠.

이건 객체들을 포인터 멤버들과 함께 공유 메모리에 위치시킬 수 있도록 합니다.
아래는 공유 메모리에서 Linked list를 만든 예제입니다.

``` c++
#include <boost/interprocess/managed_shared_memory.hpp>
#include <boost/interprocess/offset_ptr.hpp>

using namespace boost::interprocess;

// Shared memory linked list node
struct list_node
{
    offset_ptr<list_node> next;
    int                   value;
};

int main()
{
    // Remove shared memory on construction and destruction
    struct shm_remove
    {
        shm_remove() { shared_memory_object::remove("MySharedMemory"); }
        ~shm_remove(){ shared_memory_object::remove("MySharedMemory"); }
    } remover;

    // Create shared memory
    managed_shared_memory segment(create_only,
                                  "MySharedMemory",  // segment name
                                  65536);

    // Create linked list with 10 nodes in shared memory
    offset_ptr<list_node> prev = 0, current, first;

    int i;
    for (i = 0; i < 10; ++i, prev = current) {
        current = static_cast<list_node*>(segment.allocate(sizeof(list_node)));
        current->value = i;
        current->next  = 0;

        if(!prev)
            first = current;
        else
            prev->next = current;
    }

    // Communicate list to other processes
    // ...

    // When done, destroy list
    for (current = first; current; /**/) {
        prev = current;
        current = current->next;
        segment.deallocate(prev.get());
    }
    return 0;
}
```

기본적인 데이터 구조를 돕기 위해 **Boost.Interprocess**는 vector, list, map등과 같은 컨테이너를 지원하므로, std 컨테이너같은 manual data structure를 피할 수 있습니다.

## 공유 메모리에 벡터 생성하기
**Boost.Interprocess**는 공유 메모리와 메모리 맵 파일에 복잡한 객체를 생성할 수 있습니다.
예시로, STL같은 컨테이너를 공유 메모리에 구성할 수 있습니다.
이를 위해 특별한 (managed) 공유 메모리를 생성하고, **Boost.Interprocess** allocator를 선언한 후 벡터를 공유 메모리에 구성하기만 하면 됩니다.

복잡한 구조를 공유 메모리에 올릴 수 있는 클래스를 `boost::interprocess::managed_shared_memory`라고 하며, 사용하기 쉽습니다.
Argument 없이 아래 예제를 실행해보세요.

``` c++
#include <boost/interprocess/managed_shared_memory.hpp>
#include <boost/interprocess/containers/vector.hpp>
#include <boost/interprocess/allocators/allocator.hpp>
#include <string>
#include <cstdlib> //std::system

using namespace boost::interprocess;

// Define an STL compatible allocator of ints that allocates from the managed_shared_memory.
// This allocator will allow placing containers in the segment
typedef allocator<int, managed_shared_memory::segment_manager>  ShmemAllocator;

// Alias a vector that uses the previous STL-like allocator so that allocates
// its values from the segment
typedef vector<int, ShmemAllocator> MyVector;

// Main function. For parent process argc == 1, for child process argc == 2
int main(int argc, char *argv[])
{
    if (argc == 1) { // Parent process
        // Remove shared memory on construction and destruction
        struct shm_remove
        {
            shm_remove() { shared_memory_object::remove("MySharedMemory"); }
            ~shm_remove(){ shared_memory_object::remove("MySharedMemory"); }
        } remover;

        // Create a new segment with given name and size
        managed_shared_memory segment(create_only, "MySharedMemory", 65536);

        // Initialize shared memory STL-compatible allocator
        const ShmemAllocator alloc_inst(segment.get_segment_manager());

        // Construct a vector named "MyVector" in shared memory with argument alloc_inst
        MyVector *myvector = segment.construct<MyVector>("MyVector")(alloc_inst);

        for (int i = 0; i < 100; ++i)  // Insert data in the vector
            myvector->push_back(i);

        // Launch child process
        std::string s(argv[0]);
        s += " child ";
        if (0 != std::system(s.c_str()))
            return 1;

        // Check child has destroyed the vector
        if (segment.find<MyVector>("MyVector").first)
            return 1;
    }
    else { // Child process
        // Open the managed segment
        managed_shared_memory segment(open_only, "MySharedMemory");

        // Find the vector using the c-string name
        MyVector *myvector = segment.find<MyVector>("MyVector").first;

        // Use vector in reverse order
        std::sort(myvector->rbegin(), myvector->rend());

        // When done, destroy the vector from the segment
        segment.destroy<MyVector>("MyVector");
    }

    return 0;
}
```

부모 프로세스는 많은 복잡한 데이터를 이름으로 쉽게 구성할 수 있는 특별한 공유 메모리를 생성합니다.
부모 프로세스는 동일한 프로그램을 argument와 함께 실행하고, 자식 프로세스는 공유 메모리를 열고 벡터를 사용하며, 메모리를 지웁니다.

## 공유 메모리에 map 만들기

**Boost.Interprocess**는 벡터처럼 공유 메모리와 메모리 맵 파일에 map을 만들 수 있습니다.
유일한 차이점은 standard associative 컨테이너와 마찬가지로 **Boost.Interprocess**의 map도 생성자에서 allocator가 전달될 때 비교 함수가 함께 전달되어야 한다는 것입니다.

``` c++
#include <boost/interprocess/managed_shared_memory.hpp>
#include <boost/interprocess/containers/map.hpp>
#include <boost/interprocess/allocators/allocator.hpp>
#include <functional>
#include <utility>

int main ()
{
    using namespace boost::interprocess;

    // Remove shared memory on construction and destruction
    struct shm_remove
    {
        shm_remove() { shared_memory_object::remove("MySharedMemory"); }
        ~shm_remove(){ shared_memory_object::remove("MySharedMemory"); }
    } remover;

    // Shared memory front-end that is able to construct objects
    // associated with a c-string. Erase previous shared memory with the name
    // to be used and create the memory segment at the specified address and initialize resources
    managed_shared_memory segment
        (create_only
        ,"MySharedMemory" //segment name
        ,65536);          //segment size in bytes

    // Note that map<Key, MappedType>'s value_type is std::pair<const Key, MappedType>,
    // so the allocator must allocate that pair.
    typedef int    KeyType;
    typedef float  MappedType;
    typedef std::pair<const int, float> ValueType;

    // Alias an STL compatible allocator of for the map.
    // This allocator will allow to place containers
    // in managed shared memory segments
    typedef allocator<ValueType, managed_shared_memory::segment_manager> ShmemAllocator;

    // Alias a map of ints that uses the previous STL-like allocator.
    // Note that the third parameter argument is the ordering function
    // of the map, just like with std::map, used to compare the keys.
    typedef map<KeyType, MappedType, std::less<KeyType>, ShmemAllocator> MyMap;

    // Initialize the shared memory STL-compatible allocator
    ShmemAllocator alloc_inst(segment.get_segment_manager());

    // Construct a shared memory map.
    // Note that the first parameter is the comparison function,
    // and the second one the allocator.
    // This the same signature as std::map's constructor taking an allocator
    MyMap *mymap = segment.construct<MyMap>("MyMap")   // object name
                                    (std::less<int>()  // first  ctor parameter
                                    , alloc_inst);     // second ctor parameter

    // Insert data in the map
    for (int i = 0; i < 100; ++i) {
        mymap->insert(std::pair<const int, float>(i, (float)i));
    }

    return 0;
}
```

더 많은 예제(컨테이너에 컨테이너가 들어간 버전 등)는 [이 섹션](https://www.boost.org/doc/libs/1_86_0/doc/html/interprocess/allocators_containers.html#interprocess.allocators_containers.containers_explained.containers_of_containers)을 참고하세요