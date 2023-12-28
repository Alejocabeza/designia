import { Input, Label, Layout, ModalCreate, RenderList, SelectLoader } from '@renderer/components'
import { useState } from 'react'

export function Project(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Layout>
      <RenderList title="Projects" setIsOpen={setIsOpen}>
        <ModalCreate title="Add New Project" setIsOpen={setIsOpen} isOpen={isOpen}>
          <div className="flex flex-row gap-4 w-full justify-between items-center">
            <div className="w-[50%]">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Name" />
            </div>
            <div className="w-[50%]">
              <Label htmlFor="municipality">Municipality</Label>
              <Input id="municipality" type="municipality" placeholder="Municipality" />
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full justify-between items-center">
            <div className="w-[50%]">
              <Label htmlFor="dni_rif">DNI/RIF</Label>
              <Input id="dni_rif" type="text" placeholder="DNI/RIF" />
            </div>
            <div className="w-[50%]">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="phone" placeholder="phone" />
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full justify-between items-center">
            <div className="w-[50%]">
              <Label htmlFor="address">Address</Label>
              <SelectLoader />
            </div>
          </div>
        </ModalCreate>
      </RenderList>
    </Layout>
  )
}
