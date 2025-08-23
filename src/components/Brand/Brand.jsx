import React from 'react'

export default function Brand({ brand }) {
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card p-2 shadow-sm border-1 brand-card">
                    <div className="overflow-hidden">
                        <img src={brand.image} className="w-100 rounded brand-img" alt={brand.slug} />
                    </div>
                    <h5 className="mt-2">{brand.name}</h5>
                </div>
            </div>
        </>
    )
}
