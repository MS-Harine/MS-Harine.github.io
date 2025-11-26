---
title: "Boost.Interprocess - 서론 (Introduction)"
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

# Introduction
**Boost.Interprocess**는 보편적인 프로세스간 통신과 _(interprocess communication)_ 동기화 메커니즘의 _(synchronization mechanism)_ 사용을 단순화 하며, 아래 내용들을 제공합니다.

* 공유 메모리 (Shared memory)
* 메모리 맵 파일 (Memory-mapped file)
* 세마포어 (Semaphore), 뮤텍스 (Mutex), 조건변수 (Conditional variable), 업그레이드 가능한 뮤텍스 (Upgradable Mutex) 들을 공유 메모리와 메모리 맵 파일에 배치할 수 있음
* UNIX의 `sem_open`, Windows의 `CreateSemaphore` API와 같은 동기화 객체에 이름 설정
* 파일 잠금 (File locking)
* Relative pointer
* 메세지 큐 (Message queue)

또한 **Boost.Interprocess**는 공유 메모리 또는 메모리 맵 파일의 일부를 동적으로 할당하는 높은 수준의 interprocess 메커니즘을 제공합니다. (일반적으로, 고정된 크기의 메모리 세그먼트 일부를 할당합니다.)
**Boost.Interprocess**는 이러한 메커니즘을 사용하여 STL과 같은 컨테이너를 포함한 C++ 객체들을 공유 메모리와 메모리 맵 파일에 구성(construct)할 수 있는 유용한 툴을 제공합니다.

* 공유 메모리 / 메모리 맵 파일에 이름이 있는 객체와 이름이 없는 객체(anonymous object)를 동적으로 생성
* 공유 메모리 / 메모리 맵 파일과 호환되는 STL같은 컨테이너
* 공유 메모리 / 메모리 맵 파일에 사용할 수 있는 다양한 메모리 할당 패턴이 구현된 STL같은 allocator (예: Pooling)

## Building Boost.Interprocess

**Boost.Interprocess**는 header only 라이브러리이기 때문에 빌드할 필요가 없습니다.
컴파일러 include path에 Boost header 디렉토리를 추가하세요.

**Boost.Interprocess**는 별도의 컴파일이 필요한 **[Boost.DateTime](https://www.boost.org/doc/libs/1_86_0/doc/html/date_time.html)**에 의존합니다.
하지만 **Boost.Interprocess**의 하위 집합(subset)은 별도 컴파일을 요구하지 않으므로, `BOOST_DATE_TIME_NO_LIB`를 define 함으로써 **Boost.DateTime**을 자동으로 링크하지 않도록 할 수 있습니다.

**Boost.Interprocess**는 POSIX 시스템에서 뮤텍스, 조건변수 클래스 등을 구현하기 위해 pthread system call을 사용합니다.
어떤 운영체제에서는 이런 POSIX 호출을 분리된 라이브러리에서 구현되어 있기 때문에 컴파일러가 자동으로 링크하지 못하기도 합니다.
예를 들어, 몇몇 리눅스 시스템에서는 POSIX pthread 함수들이 librt.a 라이브러리에 구현되어있기 때문에 **Boost.Interprocess**를 사용하기 위해서는 Executable 또는 Shared Library를 링킹할 때 추가해줘야 할 수도 있습니다.
만약 pthread 함수에 관련된 링킹 에러가 발생하면 당신의 시스템의 문서를 확인해서 어느 라이브러리에 해당 함수가 구현되어있는지 확인해주세요.

## Tested compilers

**Boost.Interprocess**는 아래 플랫폼/컴파일러에서 테스트 되었습니다.

* Visual C++ >= 7.1
* GCC >= 4.1

> **Warning** \
> GCC < 4.3 및 MSVC < 9.0은 deprecated 되었고, 다음 버전에서 삭제될 예정입니다.
{: .prompt-warning }