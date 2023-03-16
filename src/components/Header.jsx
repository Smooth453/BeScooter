import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import beScooter from '../images/pics/beScooter.png'

import {
  ChevronDownIcon,
} from '@heroicons/react/24/solid'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block w-full p-2 text-center"
    >
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={3}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-10 w-10 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/store">
            &quot;SToRE!&quot; Heuchelheim
            </MobileNavLink>
            <MobileNavLink href="/E-scooter-leihen">
              E-Scooter leihen
            </MobileNavLink>
            <MobileNavLink href="/events">Events</MobileNavLink>
            <MobileNavLink href="/ueber-uns">Über uns</MobileNavLink>
            <MobileNavLink href="/jobs">Jobs</MobileNavLink>
            <MobileNavLink href="/info">Info</MobileNavLink>
            <MobileNavLink href="/#kontakt">Kontakt uns</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink className="" href="https://store.be-scooter.de/">
              Direkt Zum  &quot;SToRE ONLINE!&quot;
            </MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [arrowRotation, setArrowRotation] = useState('rotate-0 ')
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isDropdownOpen) {
      setArrowRotation('rotate-180')
    } else {
      setArrowRotation('rotate-0')
    }
  }, [isDropdownOpen])

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={` navbar top-0 z-50 bg-gradient-to-b from-blue-400 to-green-400 py-3 transition duration-500 md:sticky ${
        isScrolled ? 'navbar-smaller' : ''
      }`}
    >
      <Container>
        <nav className="lg:h-5 relative z-50  flex justify-between ">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Image
                className={`pic  ${isScrolled ? 'pic-smaller' : ''}`}
                src={beScooter}
                alt="My Image"
              />
            </Link>
          </div>
          <div className="hidden items-center md:flex md:gap-x-6 ">
            <NavLink href="/store">&quot;SToRE!&quot; Heuchelheim</NavLink>
            <NavLink href="/E-scooter-leihen/">E-Scooter leihen</NavLink>

            <div className="relative" ref={dropdownRef}>
              <span
                className="relative mr-4 inline-block cursor-pointer rounded-lg py-1 px-2 text-xl text-slate-900 hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900"
                onMouseEnter={toggleDropdown}
              >
                Mehr
                <span
                  className={`absolute top-1/2 right-2 -mr-[25px] -translate-y-1/2 transform transition duration-300 ${arrowRotation}`}
                  style={{ transformOrigin: '50% 50%' }}
                >
                  <ChevronDownIcon className="h-5 w-5 " />
                </span>
              </span>
              <div
                className={`absolute top-full left-1/2 z-10 mt-1 -translate-x-1/2 transform rounded-md bg-white p-2 shadow-md ${
                  isDropdownOpen ? '' : 'hidden'
                }`}
                style={{ minWidth: '300px' }}
                onMouseLeave={toggleDropdown}
              >
                <div className="ml-4 flex flex-col p-0 ">
                  <NavLink href="/events" className="mb-2 block">
                    Events
                  </NavLink>
                  <NavLink href="/ueber-uns" className="mb-2 block">
                    Über uns
                  </NavLink>
                  <NavLink href="/jobs" className="mb-2 block">
                    Jobs
                  </NavLink>
                  <NavLink href="/info" className="mb-2 block">
                    Info
                  </NavLink>
                  
                </div>
              </div>
            </div>
            <NavLink href="/#kontakt">Kontakt</NavLink>
          </div>

          <div className="flex items-center">
            <Button
              href="https://store.be-scooter.de/"
              color="transparent"
              className="hover:bg-white-500 hidden border border-black hover:border-white hover:opacity-80 md:block"
            >
              <span>
                Direkt zum &quot;SToRE ONLINE!&quot; {' '}
                <span className="lg:inline hidden"></span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
            <div className="ml-5 hidden gap-3 md:mt-2 md:flex">
              <a
                href="https://www.instagram.com/be_scooter_funsport/"
                target="Instagram"
                className="mb-2 inline-block rounded-full bg-transparent p-3 leading-normal text-black hover:ring-white  focus:outline-none ring-1 ring-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/channel/UCBbSWykgqvMCUOvSbtcqHOA?"
                target="Youtube"
                className="mb-2 inline-block rounded-full bg-transparent p-3 leading-normal text-black hover:ring-white  focus:outline-none ring-1 ring-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/bescooter.de/"
                target="Facebook"
                className="mb-2 inline-block rounded-full bg-transparent p-3 leading-normal text-black hover:ring-white  focus:outline-none ring-1 ring-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
