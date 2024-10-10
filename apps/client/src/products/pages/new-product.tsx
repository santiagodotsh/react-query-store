import {
  Button,
  Image,
  Input,
  Textarea
} from '@nextui-org/react'

export function NewProduct() {
  return (
    <div className='w-full flex-col'>
      <h1 className='text-2xl font-bold'>
        New product
      </h1>

      <form className='w-full'>
        <div className='flex justify-around items-center'>
          <div className='flex-col w-[500px]'>
            <Input className='mt-2' type='text' label='Product title' />
            <Input className='mt-2' type='number' label='Product price' />
            <Input className='mt-2' type='url' label='Product URL' />

            <Textarea className='mt-2' label='Product description' />

            <select className='rounded-md p-3 mt-2 bg-gray-800 w-full'>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value='jewelery'>Jewelery</option>
              <option value='electronics'>Electronics</option>
            </select>

            <br />

            <Button className='mt-2' color='primary'>
              Create
            </Button>
          </div>

          <div
            className='bg-white rounded-2xl p-10 flex items-center'
            style={{
              width: '500px',
              height: '600px'
            }}
          >
            <Image src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' />
          </div>
        </div>
      </form>
    </div>
  )
}