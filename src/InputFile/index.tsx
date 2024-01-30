import TextInput from '../TextInput'
import { ChangeEvent, useRef, useState } from 'react'
import { File } from 'phosphor-react'
import Text from '../Text'

export interface InputFileProps {
  onSelected: (file: File) => void
  label?: string
}

export default function InputFile({ onSelected, label }: InputFileProps) {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>()
  const [filename, setFilename] = useState<string | null>()
  const ref = useRef<HTMLInputElement>(null)

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0]

    if (file) {
      onSelected(file)

      if (file.type.startsWith('image/')) {
        const reader = new FileReader()

        reader.onload = (event) => {
          setPreview(event.target?.result)
        }

        reader.readAsDataURL(file)
      } else {
        setPreview(null)
      }

      setFilename(file.name)
    }
  }

  return (
    <>
      {!preview && !filename && (
        <div
          className="h-40 border border-zinc-300/30 border-dashed cursor-pointer flex justify-center items-center text-zinc-200"
          onClick={() => {
            ref.current?.click()
          }}
        >
          {label || 'Selecione uma imagem'}
        </div>
      )}
      <TextInput
        variant="primary"
        type="file"
        onChange={onFileChange}
        ref={ref}
        className="hidden"
      />
      {filename && (
        <div className="flex justify-center items-start gap-4 p-6">
          {preview ? (
            <img src={String(preview)} width={800} height={800} alt="" />
          ) : (
            <div className="flex flex-col justify-center items-center gap-4">
              <File className="text-white/50" size={96} />
              <Text>{filename}</Text>
            </div>
          )}
          <span
            className="text-zinc-300 cursor-pointer"
            onClick={() => {
              setPreview(null)
              setFilename(null)

              if (ref.current) {
                ref.current.value = ''
              }
            }}
          >
            X
          </span>
        </div>
      )}
    </>
  )
}
