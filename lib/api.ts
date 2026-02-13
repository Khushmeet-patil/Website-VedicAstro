const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://va-backend-6acx.onrender.com/api';

export async function getPolicy(key: string) {
    try {
        const res = await fetch(`${BASE_URL}/policies/${key}`, {
            cache: 'no-store' // Ensure fresh data
        });

        if (!res.ok) {
            if (res.status === 404) return null;
            throw new Error(`Failed to fetch policy: ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error(`Error fetching policy [${key}]:`, error);
        return null;
    }
}
