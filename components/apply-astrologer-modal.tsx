"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters."),
    lastName: z.string().min(2, "Last name must be at least 2 characters."),
    gender: z.string().default("Male"),
    mobileNumber: z.string().min(10, "Mobile number must be at least 10 digits."),
    email: z.string().email("Invalid email address."),
    experience: z.string().refine((val) => !isNaN(Number(val)), { message: "Must be a number" }),
    city: z.string().min(2, "City is required."),
    country: z.string().min(2, "Country is required."),
    systemKnown: z.array(z.string()).min(1, "Select at least one skill."),
    language: z.array(z.string()).min(1, "Select at least one language."),
    bio: z.string().optional(),
})

const GENDERS = ["Male", "Female", "Other"]
const LANGUAGES = [
    "Hindi", "English", "Punjabi", "Bengali", "Marathi", "Telugu", "Tamil", "Kannada", "Gujarati", "Odia"
]

interface ApplyAstrologerModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ApplyAstrologerModal({ open, onOpenChange }: ApplyAstrologerModalProps) {
    const [skills, setSkills] = useState<string[]>([])
    const [loadingSkills, setLoadingSkills] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            gender: "Male",
            mobileNumber: "",
            email: "",
            experience: "",
            city: "",
            country: "India",
            systemKnown: [],
            language: [],
            bio: "",
        },
    })

    // Set default values when modal opens to reset if needed
    useEffect(() => {
        if (open) {
            fetchSkills()
            // Optional: reset form if needed on open
            // form.reset(); 
        }
    }, [open])

    const fetchSkills = async () => {
        setLoadingSkills(true)
        try {
            const res = await fetch("https://va-backend-6acx.onrender.com/api/astrologer/skills")
            const data = await res.json()
            if (data.success) {
                setSkills(data.data.map((s: any) => s.name))
            }
        } catch (error) {
            console.error("Failed to fetch skills", error)
            toast.error("Failed to load skills. Please try again.")
        } finally {
            setLoadingSkills(false)
        }
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            // Endpoint is public (handled by optionalAuthMiddleware in backend)
            // If 401 is returned, it means the backend update hasn't been deployed yet.
            const response = await fetch("https://va-backend-6acx.onrender.com/api/astrologer/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...values,
                    experience: Number(values.experience)
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("You must be logged in to apply.")
                }
                throw new Error(data.message || "Something went wrong")
            }

            toast.success("Application submitted successfully! We will review and get back to you.")
            onOpenChange(false)
            form.reset()
        } catch (error: any) {
            console.error("Submission error:", error)
            toast.error(error.message || "Failed to submit application")
        }
    }

    const toggleSelection = (field: "systemKnown" | "language", value: string) => {
        const current = form.getValues(field)
        const updated = current.includes(value)
            ? current.filter((item) => item !== value)
            : [...current, value]
        form.setValue(field, updated, { shouldValidate: true })
    }

    // Watch values for re-rendering chips
    const selectedSkills = form.watch("systemKnown")
    const selectedLanguages = form.watch("language")

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto w-[90vw]">
                <DialogHeader>
                    <DialogTitle>Apply for Astrologer</DialogTitle>
                    <DialogDescription>
                        Join our platform as an expert astrologer. Fill out the form below.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter first name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gender</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select gender" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {GENDERS.map(g => (
                                                <SelectItem key={g} value={g}>{g}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="mobileNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mobile Number</FormLabel>
                                        <FormControl>
                                            <div className="flex gap-2">
                                                <div className="flex items-center justify-center px-3 border rounded-md bg-muted text-muted-foreground text-sm font-medium w-[80px]">
                                                    +91
                                                </div>
                                                <Input placeholder="Enter mobile number" {...field} className="flex-1" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter email address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FormField
                                control={form.control}
                                name="experience"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Experience (Years)</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="0" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter city" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Country</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter country" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="systemKnown"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Skills / Systems Known</FormLabel>
                                    <div className="flex flex-wrap gap-2 p-4 border rounded-md bg-muted/20 min-h-[100px]">
                                        {loadingSkills ? (
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Loader2 className="h-4 w-4 animate-spin" /> Loading skills...
                                            </div>
                                        ) : skills.length > 0 ? (
                                            skills.map((skill) => {
                                                const selected = selectedSkills.includes(skill)
                                                return (
                                                    <Badge
                                                        key={skill}
                                                        variant={selected ? "default" : "outline"}
                                                        className="cursor-pointer hover:bg-primary/90 transition-colors py-1 px-3"
                                                        onClick={() => toggleSelection("systemKnown", skill)}
                                                    >
                                                        {skill}
                                                    </Badge>
                                                )
                                            })
                                        ) : (
                                            <span className="text-sm text-muted-foreground">No skills available</span>
                                        )}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="language"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Languages</FormLabel>
                                    <div className="flex flex-wrap gap-2 p-4 border rounded-md bg-muted/20 min-h-[80px]">
                                        {LANGUAGES.map((lang) => {
                                            const selected = selectedLanguages.includes(lang)
                                            return (
                                                <Badge
                                                    key={lang}
                                                    variant={selected ? "default" : "outline"}
                                                    className="cursor-pointer hover:bg-primary/90 transition-colors py-1 px-3"
                                                    onClick={() => toggleSelection("language", lang)}
                                                >
                                                    {lang}
                                                </Badge>
                                            )
                                        })}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Short Bio</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us about yourself..."
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                                    </>
                                ) : "Submit Application"}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
