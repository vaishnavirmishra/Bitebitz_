import React from 'react'
import Card from '../ui/PartnerFeatureCard';

function Features() {
    const features = [
        {image: '/Partner/Frame 1000004366.png', title: 'Trucking', para: 'With a dedicated fleet and epert drivers, we maintain a smooth supply chain from start to finish'},
        {image: '/Partner/package.png', title: 'Packaging', para: 'With a dedicated fleet and epert drivers, we maintain a smooth supply chain from start to finish'},
        {image: '/Partner/warehouse.png', title: 'Warehousing', para: 'With a dedicated fleet and epert drivers, we maintain a smooth supply chain from start to finish'}
    ]
    
  return (
    <div className='px-20 py-12 flex gap-12'>
        {features.map((feat, index) => (
            <Card 
                key={index} 
                image={feat.image} 
                title={feat.title} 
                para={feat.para} 
            />
        ))}
    </div>
  )
}

export default Features