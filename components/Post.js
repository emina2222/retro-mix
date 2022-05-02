import Link from 'next/link'

export default function Post({post}){
    return(
        <div>
            <img src={post.frontmatter.cover_image} alt='' />
            <p>Posted on {post.frontmatter.date}</p>
            <h3>{post.frontmatter.title}</h3>

            <Link href={`/offers/${post.slug}`}>
                <a className='offer-info-button'>Read More</a>
            </Link>
        </div>
    )
}