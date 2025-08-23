import React from 'react'

export default function Categorie({ categorie }) {
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card p-2 shadow-sm border-1 brand-card">
                    <div className="overflow-hidden">
                        <img src={categorie.image} className="w-100 rounded brand-img" height={300} alt={categorie.slug} />
                    </div>
                    <h5 className="mt-2">{categorie.name}</h5>
                </div>
            </div>
        </>
    )
}
