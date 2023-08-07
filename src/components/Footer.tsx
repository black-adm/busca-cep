import iconImage from '../assets/Icon.svg'

export function Footer() {
    return (
        <div className='max-w-screen w-full sm:pb-12'
        >

            <div className="max-w-4xl sm:rounded-xl sm:px-5 mx-auto"
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2688.jpg?w=740&t=st=1690610157~exp=1690610757~hmac=dd3daeac10924c77d1a2eb0bcc22b5afb415c6251d362cc9175bb015b512ce30')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <footer className="p-4 md:px-6 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="flex pt-5 sm:items-center sm:mb-0 sm:pt-0">
                            <img
                                src={iconImage}
                                className="mr-3 h-8"
                                alt="BuscaCep Logo"
                            />

                            <h4 className="self-center uppercase text-white tracking-wider text-lg font-extrabold whitespace-nowrap">
                                Busca<strong className="text-red-600">Cep</strong>
                            </h4>
                        </span>

                        <ul className="flex flex-wrap justify-end items-center mb-6 px-2 gap-x-6 sm:gap-x-0 sm:mb-0 sm:px-0 sm:justify-center">
                            <li>
                                <a
                                    href="https://twitter.com/blackadm_"
                                    target='_blank'
                                    className="flex items-center text-lg text-link-blue hover:underline hover:text-blue-400 md:mr-6"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>

                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/black-adm"
                                    target='_blank'
                                    className="flex items-center text-lg text-white hover:underline hover:text-zinc-700 md:mr-6"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-5"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.linkedin.com/in/blackadm"
                                    target='_blank'
                                    className="flex items-center text-lg text-link-blue hover:underline hover:text-blue-400 md:mr-6"
                                >
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={0}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                        />
                                        <circle cx={4} cy={4} r={2} stroke="none" />
                                    </svg>

                                </a>
                            </li>
                        </ul>
                    </div>

                    <hr className="my-4 border-acid lg:my-6" />
                    <span className="pb-3 flex justify-center text-sm font-medium text-white sm:text-center">
                        © 2023{" "} Web-Developer ™. Matheus Roberto
                    </span>
                </footer>
            </div>
        </div>

    )
}