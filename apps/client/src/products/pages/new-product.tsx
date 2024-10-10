import {
  Button,
  Image,
  Input,
  Textarea
} from '@nextui-org/react'
import { Controller, useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

interface FormInputs {
  title: string
  price: number
  description: string
  category: string
  image: string
}

export function NewProduct() {
  const { control, handleSubmit, watch } = useForm<FormInputs>({
    defaultValues: {
      title: '',
      price: 0,
      description: '',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
    }
  })

  const image = watch('image')
  
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
  }

  return (
    <div className='w-full flex-col'>
      <h1 className='text-2xl font-bold'>
        New product
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full'
      >
        <div className='flex justify-around items-center'>
          <div className='flex-col w-[500px]'>
            <Controller
              control={control}
              name='title'
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  type='text'
                  value={field.value}
                  onChange={field.onChange}
                  className='mt-2'
                  label='Title'
                />
              )}
            />

            <Controller
              control={control}
              name='price'
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  type='number'
                  value={field.value?.toString()}
                  onChange={(e) => field.onChange(+e.target.value)}
                  className='mt-2'
                  label='Price'
                />
              )}
            />

            <Controller
              control={control}
              name='image'
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  type='url'
                  value={field.value}
                  onChange={field.onChange}
                  className='mt-2'
                  label='URL'
                />
              )}
            />

            <Controller
              control={control}
              name='description'
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea
                  value={field.value}
                  onChange={field.onChange}
                  className='mt-2'
                  label='Description'
                />
              )}
            />

            <Controller
              control={control}
              name='category'
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  value={field.value}
                  onChange={field.onChange}
                  className='rounded-md p-3 mt-2 bg-gray-800 w-full'
                >
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value='jewelery'>Jewelery</option>
                  <option value='electronics'>Electronics</option>
                </select>
              )}
            />

            <br />

            <Button
              type='submit'
              className='mt-2'
              color='primary'
            >
              Create
            </Button>
          </div>

          <div
            className='bg-white rounded-2xl p-10 flex items-center'
            style={{ width: '400px' }}
          >
            <Image src={image} />
          </div>
        </div>
      </form>
    </div>
  )
}
