"use server"

export interface ActionResult {
    error: string | null
}

export async function chatAction(
    _: any,
    formData: FormData
): Promise<ActionResult> {
    try {
        const { email, message } = Object.fromEntries(formData.entries())
        return { error: null }
    } catch (error) {
        if (error instanceof Error) return { error: error.message }

        return { error: "Error occurred" }
    }
}
