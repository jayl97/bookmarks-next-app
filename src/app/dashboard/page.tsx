'use client'

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import axios from 'axios'

const queryClient = new QueryClient()

function Dashboard() {
    const fetchBookmarks = async () => {
        const bookmarks = await axios.get('http://localhost:3001/bookmark/all-bookmarks')
        return bookmarks.data
    }

    const {data: bkms, isLoading} = useQuery({
        queryFn: fetchBookmarks,
        queryKey: ["bkms"]
    })

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Dashboard
            </h1>
            <h2 className="mt-10 text-center text-xl leading-9 font-bold tracking-tight text-gray-900">
              The list of Bookmarks is as below
            </h2>
            <div>
            <ul role="list" className="divide-y divide-gray-100">
                {bkms?.map((bookm: any) => {
                    return (
                        <li key={bookm.id} className="flex justify-between gap-x-6 py-5">
                            <div className="mx-10 flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{bookm.title}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{bookm.description}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            </div>
        </>
    )
}

const hof = (WrappedComponent: any) => {
    return (props: any) => (
        <QueryClientProvider client={queryClient}>
            <WrappedComponent {...props} />
        </QueryClientProvider>
    )
}

export default hof(Dashboard)