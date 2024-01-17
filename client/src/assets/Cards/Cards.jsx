import React from 'react';
import './cards.css';

const Cards = () => {
  return (
    <>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

      <a href="/td">
        <div className="section_our_solution">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img src="./student.png" alt="" />
                    </div>
                    <div className="solu_title">
                      <h3>Student TO-DO List</h3>
                    </div>
                    <div className="solu_description">
                      <p>
                        Efficient student to-do list: Plan tasks, set deadlines, prioritize assignments, track progress, and ensure balanced study time for academic success and personal growth.
                      </p>
                      <button type="button" className="read_more_btn">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Cards;
