import {z} from "zod";

enum hobbies {
    photography, dogs, nature
}

const userSchema = z.object({
    name: z.string(), 
    age: z.number(), 
    hobbies: z.nativeEnum(hobbies)
})

type userType = z.infer<typeof userSchema>

const user: userType = {
    name: "meme", 
    age: 30, 
    hobbies: hobbies.nature
}

// -------------------


const gender = ["male", "woman", "nonbinary"] as const

const personSchema = z.object({
    name: z.string(), 
    age: z.number(), 
    gender: z.enum(gender)
})

type personType = z.infer<typeof personSchema>

const person: personType = {
    name: "ryan", 
    age: 30,
    gender: gender[0] 
}

const result = personSchema.parse(person)
console.log(result);
