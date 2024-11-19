import admin, { ServiceAccount } from "firebase-admin";

// Initialize Firebase Admin SDK
const serviceAccountPath: ServiceAccount = {
    privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCLJtVFi4iPHj32\nc9GY0OXrfrOL8dFOR3n+X0VIHmTbmF+0FRynGuam7NGl+q6maQUPiq4Q8sZHhG9y\noD0AvSvUVIexYR/UabKtv0Gv+U0W90PNUtpCZFPoiPtOihJBdaMc2j7wfkHFK0N9\nFVU7KG0hP/trkZkr2FY6ZlLhEX7mlAaIXcpeR6zjOXaKwWL37n6TknapbpxlQJEp\nh3iigjItbyAonK2R+DggS1jQbKWvMhTudJXLbfYCEuq2Vz1R+wF0AMCqtT3090uY\n5wDUFn7GJ98eTpxeSXJX3XDKa5ZfBZbmhiSz3r395LgWrWxPC1k9GvBG50FN2ddE\nkbSA3TFJAgMBAAECggEAEiIfssNfKqoEkG7sBl+v8UNT6c27uoQNUr0JjeoKt08g\n/EUFXzAIlKzRw9u/Z1zSKwH7Hab1eHEQBj5Ov3TnbEZjtGrKt2cwFfzmy3l6YUlx\nos/ENNisJ+ZfPA85bSGuUt6MoHxjh7/T4036Cw6BQiRQrZDjXAJXd57JTXPL4geB\nAq9cKL0w8aEQ6GrXpjFH8jSxxlaz7iiVwJwdwcbnBJ7BuJwrv8mjPOLaYKGVnFFv\nlwPCEtYf+fvyqj1tsRCuoWJKeH8OO9XHFYAVDxcacUjFb+q800EbIEeUzzPGHr9X\ncA9okVUqI1n+aGAKnkDVz5HKLg2ioeV+b371BWc8jQKBgQC9bNFUjAWXqiu0vfUH\n3pL4bAHYB0b/22yxsosVhy0aDAZdTEWAmD+eJqhGsY7nT7FhXVxfF6DQIUSyRyio\nErsKgUubvATNPzBIV8hFGlrHHsiwPRcXtJ5i/9+7HHovSL89gWscSjp72/6Wuwyb\nv7YZET2AxEfRpaQFvmyY9owqjwKBgQC8DsIPminkaxUYS2bjGLCuFlHht6cb26zO\nwK3rpeEEAFfVttgy9jjs6VFR51pVjU3EFvbeTpkyOYj3wHFHxAy5zmZVUa6mW/2e\nzvVuLxeWB53PYy9c1e8XvDpEcFiUEIF0hUioFuXFPUhTtJ8n/9O+tySI53SkBKaO\nVuRVz8qypwKBgQCwS1BfQZoK10OqCYi89DcQoWTt64f2o/77OtIbDR26uipKNqwQ\nzKGYzR2b/bCkMxVBKqTHk7QFQJEw4u1Bz3zogAEgRdKqOv7ytVAckDSgUVQyQgj1\n9RHbzYwqFozY6PmjgolvYN4hXFQLcLaBVeFiXxtAdmzo/yIyflGP4xX8nQKBgQCa\nF22j4ypYY/XRBlez1VNQEjHdxeJDzWh3sSHRaQZLhQxzrXLRrzdNyJA9kFhQqYwD\nFN4LolOc98/nUeSAbYAP77OiTV/SKKZULjikpCmrYWpJuHfildlnlXAZDAVIrY2l\nsGCserajO2e8Ts/qspEKQH7LPvwwOS9QippmRfFNGQKBgQCcyTDmuWoxpRzwLUdK\nt01bUnP+WJ/Ce5tpJVI+nB/UVVZ0snKOP/r4zS+XW4bA632BWl7XLEmF04FoVwEY\nPyFyK+yeyBVuEerNm/qq7TAmyeAtrsgITiEG6HZ2V+gLKlllK8qfl5F+mB5BwJGj\neIeJmo7rhsdtjfAPtAGxWN6DMQ==\n-----END PRIVATE KEY-----\n",
    clientEmail:
        "firebase-adminsdk-oz4u9@ebuddy-test-62b94.iam.gserviceaccount.com",
    projectId: "ebuddy-test-62b94",
};

// Check if the Firebase app is already initialized to prevent re-initialization issues
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountPath),
    });
}

export const auth = admin.auth();
export const db = admin.firestore();
