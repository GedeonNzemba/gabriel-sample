import React from 'react';
import './Founder.css';

export const Founder2 = () => {

    return(
        <article className="founder-container">
        <section className="founder-header-container">
            <header className="founder-header">
                Meet The People Behind Proper Living
            </header>
        </section>
        <section className="founder-member-p1">
            <aside className="member-p1-image">
                {/* PARALLEX IMAGE */}
                <div className="content content-img-member-p1">
                    <div class="item">
                        <div class="item__img-wrap img__member-p1">
                            <div class="item__img item__img--t2 member-img-p1"></div>
                        </div>
                    </div>
                </div>
                {/* PARALLEX IMAGE */}
            </aside>
            <div className="member-p1-info">
                <header className="member-p1">
                    <div className="member-p1-name">Casper Lee</div>
                    <hr />
                    <blockquote>
                        Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.
                        <footer>
                            <cite>
                                Casper Lee
                            </cite>
                        </footer>
                    </blockquote>
                </header>
            </div>
        </section>
        <section className="founder-member-p2">
            <div className="member-p2-wrap">
                <aside className="member-p2-image">
                    {/* PARALLEX IMAGE */}
                    <div className="content content-img-member-p2">
                        <div class="item">
                            <div class="item__img-wrap img__member-p2">
                                <div class="item__img item__img--t2 member-img-p2"></div>
                            </div>
                        </div>
                    </div>
                    {/* PARALLEX IMAGE */}
                </aside>
                <div className="member-p2-info">
                    <header className="member-p2">
                        <div className="member-p2-name">Benji Schaffer</div>
                        <hr />
                        <blockquote>
                            Luck? I don't know anything about luck. I've never banked on it and I'm afraid of people who do. Luck to me is something else: Hard work - and realizing what is opportunity and what isn't.
                            <footer>
                                <cite>
                                    Benji Schaffer
                                </cite>
                            </footer>
                        </blockquote>
                    </header>
                </div>
            </div>
        </section>
    </article>
    );
}
export default Founder2;