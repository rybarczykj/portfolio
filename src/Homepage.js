import './homepage.less'

export const Homepage = () => {
    return (
        <div className='portfolio'>
            <div className='flex'>
                <div className='introduction'>
                    <span className="text">JACK RYBARCZYK is a mf uhhh frontend engineer + graphic_designer. based in NYC. currently @ datadog and doesn’t understand <span className='highlighted'>negative space
                    </span>.
                    </span>
                </div>

                <div className='projects'>
                    <ul>
                        <li>user interfaces</li>
                        <li>tools for designers</li>
                        <li>video processing</li>
                        <li>interactive sculpture</li>


                    </ul>
                </div>




            </div >
        </div>


    );
}


export default Homepage;
