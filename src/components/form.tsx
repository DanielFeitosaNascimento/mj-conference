'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Slider } from '@/components/ui/slider'
import { useToast } from '@/components/ui/use-toast'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const schema = z.object({
  fullName: z.string().min(1, 'Nome completo é obrigatório'),
  attendedBefore: z.boolean(),
  partOfChurch: z.boolean(),
  churchName: z.string().optional(),
  attendedBy: z.string().optional(),
  rating: z.number().min(1).max(100).optional(),
  feedback: z.string().max(400, 'Máximo de 400 caracteres').optional(),
})

type FormData = z.infer<typeof schema>

export default function ProfileForm() {
  const { toast } = useToast()
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      attendedBefore: false,
      attendedBy: "",
      churchName: "",
      feedback: "",
      fullName: "",
      partOfChurch: false,
      rating: 20
    }
  })
  const { handleSubmit, formState: { errors }, control, reset } = form

  const [rating, setRating] = useState<number[]>([20])

  const handlerSubmitForm = async (data: FormData) => {
    const payload = { ...data, rating: rating[0] }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.status === 200) {
        const result = await response.json()
        toast({
          title: `${payload.fullName} - Resposta salva com sucesso`,
          description: `Agradecemos de coração o seu feedback! ${payload.fullName} você é especial para nós.`,
          duration: 4500
        })

        reset()
        setRating([20])
      } else {
        const errorData = await response.json()
        toast({
          title: `${payload.fullName} - Erro ao salvar resposta!`,
          description: `Erro: ${errorData.error}`,
          duration: 4500
        })
      }
    } catch (error) {
      toast({
        title: `${payload.fullName} - Erro ao salvar resposta!`,
        description: `Problemas internos de conexão com servidor!`,
        duration: 4500,
        variant: 'destructive'
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handlerSubmitForm)} className="space-y-6">
        <FormField
          control={control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo *</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome completo" {...field} />
              </FormControl>
              <FormMessage>{errors.fullName?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="attendedBefore"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Já participou antes da sala?</FormLabel>
              <FormControl>
                <div className='flex space-x-2 p-2 items-center justify-start'>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange as (checked: boolean) => void}
                    id="attendedBefore"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="partOfChurch"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Faz parte de uma igreja?</FormLabel>
              <FormControl>
                <div className='flex space-x-2 p-2 items-center justify-start'>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange as (checked: boolean) => void}
                    id="partOfChurch"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="churchName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qual igreja?</FormLabel>
              <FormControl>
                <Input placeholder="Nome da igreja" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="attendedBy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quem orou por você?</FormLabel>
              <FormControl>
                <Input placeholder="Nome da pessoa" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>O quanto você gostou da sala profética?</FormLabel>
          <FormControl>
            <Slider
              max={100}
              step={1}
              min={1}
              onValueChange={(value) => { setRating(value) }}
              value={rating}
            />
          </FormControl>
        </FormItem>

        <FormField
          control={control}
          name="feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>O que você achou da sala? {`(nº caracteres ${field?.value?.length})`}</FormLabel>
              <FormControl>
                <Textarea placeholder="Seu feedback" {...field} />
              </FormControl>
              <FormMessage>{errors.feedback?.message}</FormMessage>
            </FormItem>
          )}
        />

        <Button type="submit" className='w-64'>Enviar</Button>
      </form>
    </Form>
  )
}
