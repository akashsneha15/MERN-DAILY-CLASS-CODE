const Products=()=>{
import Products from './Products';
    
        
        
        let Products =[
            {
            name: "mobile",
            price: 50000,
            description:"good condtition",
            rating:"⭐⭐⭐",
            imageSrc:"https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg"
        },
        {
            name: "laptop",
            price: 75000,
            description: "good condition",
            ratings: "⭐⭐⭐",
            imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzdXQKtpASTHJXd8ncnw5WHJ0XCPuZ9ZSmA&s"
        },
        {
            name:"clothes",
            price:5000,
            description:"good quality",
            imageSrc:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4Zuc9Ri3hdWam9hrxXS6SId2lweFq4txX-R9WYvMBiolDkQuajF6giVwJGxtwTK3gQC-LHubrcxP4MW6mVHJ50GTzllc7ZQjsMvzSxdQQSC1Pg2jePLxPMF4"

        }

    ];

        
        return(
            <div>
                {Products.map((products)=>(
                    <div>
                        <ProductCard details={products}/>
                    </div>
                ))}
            </div>
        )
        
    
}


export default Products;