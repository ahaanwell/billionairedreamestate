"use client"
import React from 'react'
import Link from 'next/link';

function DeveloperList() {
    const developerList = [
        {
            slug: "adarsh-group",
            name: "Adarsh Group",
            developerLogo: "/adarsh-group.png"
        },
        {
            slug: "prestige-group",
            name: "Prestige Group",
            developerLogo: "/prestige-group.jpg"
        },
        {
            slug: "sobha-group",
            name: "Sobha Group",
            developerLogo: "/sobha-group.webp"
        },
        {
            slug: "lodha-group",
            name: "Lodha Group",
            developerLogo: "/lodha-group.png"
        },
        {
            slug: "brigade-group",
            name: "Brigade Group",
            developerLogo: "/brigade-group.png"
        },
        {
            slug: "godrej-properties",
            name: "Godrej Properties",
            developerLogo: "/godrej-properties.png"
        },
        {
            slug: "embassy-group",
            name: "Embassy Group",
            developerLogo: "/embassy-group.png"
        }
    ];

    return (
        <section>
            <div className="w-[90%] m-auto pt-8 pb-16">
                <div className="flex flex-col justify-center">
                    <h2 className="text-center font-bold text-3xl text-black">
                        Leading Real Estate Developers
                    </h2>
                </div>
                <div className="mt-6 scroll-wrapper">
                    <div
                        className="scroll-content overflow-x-auto flex space-x-4 py-4"
                        id="logoContainer"
                        style={{
                            scrollBehavior: "smooth",
                            scrollbarWidth: "none",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {developerList.map((item, i) => (
                            <Link href={`/propertylist/${item.slug}`} key={i}>
                                <img
                                    className="min-w-[200px] h-[86px] border rounded-md p-2 bg-white"
                                    src={item.developerLogo}
                                    alt={item.name}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DeveloperList;
