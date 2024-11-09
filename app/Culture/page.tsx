import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Culture = () => {
  return (
    <section className='culture'>
        <div className="culture-text">
            <h5>Environment of the Hotel Pearl</h5>
            <h2>Embrace Royalty</h2>
            <p>Enjoy the VIP Status
            Welcome to the Privilege Club. We at Hotel Pearl know that as a Privilege Club Member you deserve the best and that is why we have created special offers for you to enjoy.</p>
            <div className='btn'>
                <Link className='btn-link' href={""}>Read More</Link>
            </div>
        </div>

        <div className="culture-img">
            <Image src={"/img/geth.png"} alt='culture img' height={1000} width={1000}/>
        </div>
    </section>
  )
}

export default Culture