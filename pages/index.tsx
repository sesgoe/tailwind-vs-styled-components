import Head from 'next/head';
import React from 'react';
import { UserStyledComponents } from '../components/StyledComponents';
import { UserTailwind } from '../components/Tailwind';

function PulsyContent() {
    return (
        <div>
            <div className="py-4 space-y-2">
                <div className="w-full h-2 bg-gray-600 animate-pulse"></div>
                <div className="w-3/5 h-2 bg-gray-500 animate-pulse"></div>
                <div className="w-4/5 h-2 bg-gray-400 animate-pulse"></div>
                <div className="w-full h-2 bg-gray-500 animate-pulse"></div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex justify-around">
                <div className="flex flex-col items-center justify-center w-1/3 h-screen my-12 space-y-4">
                    <div className="w-full px-4 text-gray-100 bg-gray-700 divide-y divide-gray-600 rounded-md">
                        <div className="py-3">
                            <UserTailwind fullName="John Smith" availability="available" />
                        </div>
                        <PulsyContent />
                    </div>
                    <div className="w-full px-4 text-gray-100 bg-gray-700 divide-y divide-gray-600 rounded-md">
                        <div className="py-3">
                            <UserTailwind fullName="Willy Wonka" availability="unavailable" />
                        </div>
                        <PulsyContent />
                    </div>
                    <div className="w-full px-4 text-gray-100 bg-gray-700 divide-y divide-gray-600 rounded-md">
                        <div className="py-3">
                            <UserTailwind fullName="Bobby Tables" availability="away" />
                        </div>
                        <PulsyContent />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 h-screen my-12 space-y-4">
                    <div className="w-full px-4 text-gray-100 bg-gray-700 divide-y divide-gray-600 rounded-md">
                        <div className="py-3">
                            <UserStyledComponents fullName="John Smith" availability="available" />
                        </div>
                        <PulsyContent />
                    </div>
                    <div className="w-full px-4 text-gray-100 bg-gray-700 divide-y divide-gray-600 rounded-md">
                        <div className="py-3">
                            <UserStyledComponents
                                fullName="Willy Wonka"
                                availability="unavailable"
                            />
                        </div>
                        <PulsyContent />
                    </div>
                    <div className="w-full px-4 text-gray-100 bg-gray-700 divide-y divide-gray-600 rounded-md">
                        <div className="py-3">
                            <UserStyledComponents fullName="Bobby Tables" availability="away" />
                        </div>
                        <PulsyContent />
                    </div>
                </div>
            </main>
        </div>
    );
}
