import vine from '@vinejs/vine'

export const emniValidator = vine.compile(
  vine.object({
    name: vine.string(), // Example field
  })
)
