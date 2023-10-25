'use client'
import Head from "next/head";
import { useRouter } from "next/navigation";
import { HiCheckCircle } from "react-icons/hi";

export default function Order() {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>Thank You</title>
                <meta name="description" content="All Products" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto">
                <div className="p-4 w-full">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <HiCheckCircle
                                className="h-5 w-5 text-green-400"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-green-800">
                                Order Placed
                            </h3>
                            <div className="mt-2 text-sm text-green-700">
                                <p>
                                    Thank you for your Order. We have placed the
                                    order and your email will recieve further
                                    details.
                                </p>
                            </div>
                            <button
                                onClick={() => router.push("/shop")}
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-sky-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-900 mt-4"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
