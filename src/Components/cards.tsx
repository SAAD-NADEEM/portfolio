function Cards() {


    return (
        <>
            <section className="cards">
                <a href="https://recipegen-ai.vercel.app/" className="card flex-row">
                    <div className="left-sec"><img src="/recipegen.png" alt="" /></div>
                    <div className="right-sec"><p>RecipeGen generates personalized recipes based on user-selected ingredients. Powered by a generative AI model, the app provides complete cooking instructions, ensuring a seamless cooking experience. Users can explore new recipes, customize ingredients, and save their favorites. The app is ideal for home cooks, food enthusiasts, and anyone looking to try new dishes.</p></div>
                </a>
                <a href="https://education-a-pp.vercel.app/" className="card flex-row">
                    <div className="left-sec"><img src="/image.png" alt="" /></div>
                    <div className="right-sec">
                        <p>StudyGPT is an educational app in development, designed to generate quizzes and questions based on uploaded PDF or text data. Currently, only the text feature is available, allowing users to input written content and receive interactive quizzes with guidance from a friendly cartoon tutor. With planned PDF support, StudyGPT aims to provide a comprehensive study tool, ideal for students and educators alike.</p>
                    </div>
                </a>
                <a href="https://nutritional-powerhouse.netlify.app/" className="card flex-row">
                    <div className="left-sec"><img src="/nutri.png" alt="" /></div>
                    <div className="right-sec"><p>Nutritional Powerhouse delivers detailed nutritional insights on fruits and vegetables. Users can input a fruit or vegetable to access comprehensive data on calories, vitamins, sugars, and health benefits. The app also offers unique visualizations, making nutritional info easy to understand and impactful for health-conscious users. Ideal for anyone focused on nutrition and healthy living.</p></div>
                </a>
            </section>
        </>
    );
}

export default Cards;