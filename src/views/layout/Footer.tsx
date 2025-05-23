import React from 'react'
import ExternalLink from '../components/ExternalLink'

export default function Footer() {
    return (
        <footer className='mt-auto py-[3rem] pl-[1rem] bg-header'>
            <div className='inline'>

                <ul className='inline space-x-[1rem]'>
                    <li className='inline'>
                        <ExternalLink className='text-content hover:text-accent' href='https://github.com/spmods-official/spmods'>Github</ExternalLink>
                    </li>


                    <li className='inline'>
                        <ExternalLink className='text-content hover:text-accent' href='https://www.instagram.com/spmods.official/'>Instagram</ExternalLink>
                    </li>


                    <li className='inline'>
                        <ExternalLink className='text-content hover:text-accent' href='https://www.linkedin.com/company/spmods/about/'>Linkedin</ExternalLink>
                    </li>

                </ul>
            </div>
        </footer>
    )
}

