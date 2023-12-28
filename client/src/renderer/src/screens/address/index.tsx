import { Input, Label, Layout, ModalCreate, RenderList, SelectLoader } from '@renderer/components'
import { useState } from 'react'

export const Address = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Layout>
      <RenderList title="Address" setIsOpen={setIsOpen}>
        <ModalCreate title="Add New Address" setIsOpen={setIsOpen} isOpen={isOpen}>
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
              <Label htmlFor="country">Country</Label>
              <div className="mt-1">
                <SelectLoader id="country" name="country" />
              </div>
            </div>
            <div className="w-[50%]">
              <Label htmlFor="phone">City</Label>
              <div className="mt-1">
                <SelectLoader id="city" name="city" />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full justify-between items-center">
            <div>
              <Label className="font-bold">Main Address</Label>
              <div className="mt-1">...text example</div>
            </div>
          </div>
        </ModalCreate>
      </RenderList>
    </Layout>
  )
}
