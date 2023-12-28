import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { HandleSubmit } from '@renderer/utils/type'

interface Props {
  title: string
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  children: React.ReactNode
  handleSubmit?: HandleSubmit
}

export const ModalCreate = (props: Props): JSX.Element => {
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => props.setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[50%] transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-center items-center flex-col gap-8">
                    <div className="w-full flex justify-between items-center broder-b">
                      <Dialog.Title as="h3" className="text-2xl text-gray-900">
                        {props.title}
                      </Dialog.Title>
                      <button
                        className="bg-gray-200 rounded-full p-2 flex justify-center items-center transition-colors duration-150 hover:bg-red-500 hover:text-white"
                        onClick={() => props.setIsOpen(false)}
                      >
                        <XMarkIcon className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="w-full">
                      <form className="flex flex-col gap-6">
                        {props.children}
                        <div className="flex flex-row justify-end items-center gap-4">
                          <button type="reset" className="bg-red-500 p-2 px-6 rounded text-white">
                            Clear
                          </button>
                          <button type="reset" className="bg-blue-500 p-2 px-6 rounded text-white">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
