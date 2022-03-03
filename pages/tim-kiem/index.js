import React from 'react'
import Layout from '../../layout'

export async function getServerSideProps(context) {
    
    try {
        
        return {
            props: { },
        }
    } catch (e) {
        context.res.statusCode = 404;
        return {
            notFound: true,
        }
    }
}



export default function Category() {

    return (
        <Layout>

        </Layout>
    )
}
