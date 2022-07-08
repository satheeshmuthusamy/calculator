import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './quick.css';
class QuickSearch extends Component{
    render(props){
        return(
            <div id="quicksearch">
            <span id="quickHeading">Quick search</span>
            <span id="quicksubHeading">Discover restaurents by Brands</span>
            <div id="main">
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="https://www.bing.com/th?id=OIP.EULEUO2ZRGVjW_Uz1ghwAQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"alt="dinnerimg"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading"><Link href="listing.html">Dominos</Link></div>
                        <div class="componentsubHeading">Dil, Dosti, Domino's!</div>
                        
                    </div>
                </div>
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="https://www.bing.com/th?id=OIP.Ts0XdS-iYCN0B6p0Whd_dQHaJC&w=226&h=276&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"alt="dinnerimg"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading"><Link href="listing.html">KFC</Link></div>
                        <div className="componentsubHeading">'It's Finger Lickin' Good'</div>
                    </div>
                </div>
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="https://www.bing.com/th?id=OIP.csPOF25Lh8pOZjUL4DLYjgHaEc&w=185&h=108&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"alt="dinnerimg"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading"><Link href="listing.html">Subway</Link></div>
                        <div className="componentsubHeading">"Eat Fresh"</div>
                    </div>
                </div>
                <div className="tileContainer"> <div className="tileComponent1">
                    <img src="https://www.bing.com/th?id=OIP.l7sYnH4M0n2e0cuteFKgIgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"alt="dinnerimg"/>
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading"><Link href="listing.html">Pizza Hut</Link></div>
                    <div className="componentsubHeading"> "No one outpizzas the hut"</div>
                </div></div>
                <div className="tileContainer"> <div className="tileComponent1">
                    <img src="https://th.bing.com/th/id/OIP.U5Q57oKU1bFQb2DEppwYWAHaD4?w=313&h=180&c=7&r=0&o=5&pid=1.7"alt="dinnerimg"/>
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading"><Link href="listing.html">Burger King</Link></div>
                    <div className="componentsubHeading">“Be Your Way,”</div>
                </div></div>
                <div className="tileContainer"> <div className="tileComponent1">
                    <img src="https://www.bing.com/th?id=OIP.V29o_4GLZlngVFGcIF4vkAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"alt="dinnerimg"/>
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading"><Link href="listing.html">McDonald's</Link></div>
                    <div className="componentsubHeading">i'm lovin it</div>
                </div></div>
                <span id="quickHeading">Favourites For Everyone</span>
                <div id="dishes">
                    <div id="t"><img src="https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="ice cream"title="ICECREAM"/></div>
                    <div id="t"><img src="https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="cake"title="CAKE"/></div>
                    <div id="t"><img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="salad"title="FRUITSALAD"/></div>
                    <div id="t"><img src="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="noodles"title="NOODLES"/></div>
                    <div id="t"><img src="https://images.pexels.com/photos/11170284/pexels-photo-11170284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="biryani"title="BIRYANI"/></div>
                    <div id="t"><img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="roti"title="ROTI"/></div>
                    
                    
                </div>
            </div>
            
            </div>
            )
            }
    }
    
export default QuickSearch;