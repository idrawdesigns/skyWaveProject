import React from 'react'

import './employer.scss'

const employer = () => {
  return (
    <div class="page-wrapper">
      {/* // <!-- the header section --> */}
      <section className=" container-fluid header">
        <div class="management">
          <h4>Management advice</h4>
          <p>
            Find out how we can help you recruit the <br />
            best for your business
          </p>
        </div>
        <div class="form-wrap">
          <form>
            <h3>
              Looking to hire? <br />
              <span>
                <p>Let us help you get your next best talent</p>
              </span>
            </h3>{' '}
            <br />
            <input type="text" placeholder="Enter your name" id="name" />
            <input
              type="text"
              placeholder="Enter your company Name"
              id="company"
            />
            <input type="email" placeholder="Enter your Email" id="email" />
            <input
              type="tel"
              name="tel"
              placeholder="Enter your Telephone Number"
              id="tel"
            />
            <input type="button" value="Submit" id="btn" />
          </form>
        </div>
      </section>

      {/* <!-- End of header section --> */}

      {/* <!-- body section --> */}
      <section class="content-body">
        <div class="recruit">
          <h4>Recruiment</h4> <br />
          <p>
            Skyways Global Services Ltd offers outsourcing services in
            recruitment. We carry out talent acquisition on behalf of our client
            ensuring that the client gets the best persons to fill the positions
            they intend to fill. We provide a holistic solution to ensure that
            our clients focus on their core business therefore increasing
            strategic efficiencies in their business operations. We are
            committed to ensuring our clients get highly qualified, competent
            and precise talent in the market for a given job profile. We Recruit
            Staff personnel, technical talent, and unskilled talent including
            but not limited to housekeepers, maids, gardeners and labourers.
            Skyways Global Services Ltd further offers vacancy advertising,
            short listing and interviewing services and finally recommends a
            short list for further consideration by our client or the best
            candidate to fill a given position. A team of highly qualified and
            experienced Human Resource experts are involved in carrying out this
            exercise using HR best practices.
          </p>
        </div>
        {/* <!-- end recuitment --> */}

        <div class="checks">
          <h4>Background Checks</h4> <br />
          <p>
            Recruitment process is a highly expensive and time consuming
            exercise that has significant bottom line impact to any organisation
            therefore creating the need for organisations to get it right the
            first time. Skyways Global Services Ltd therefore, recognises the
            need for organisations to hire authentic and competent staff for
            smooth running of business and maximum productivity. We provide a
            crucial service to our clients of carrying out career and academic
            background checks of their prospective employees to ensure the
            hiring firm does not suffer deception that would ultimately affect
            the functionality of the organisation or part of the organisation.
            Further, we have a clear framework of gathering information from
            candidates’ referees from which we provide potential employers with
            structured reports.{' '}
          </p>
        </div>
        {/* <!-- end background --> */}

        <div class="training">
          <h4>Training and Capacity Building</h4> <br />
          <p>
            For maximum productivity and continued relevance in the highly
            competitive and dynamic business environment today, every
            organisation must ensure that they are up-to-date with the current
            market trends hence the need for consistent training of their human
            resource. In addition, the need for teamwork and good employee
            relations in every organisation that values success cannot be
            overemphasised. Our Firm takes lead in the Kenyan and East African
            market in providing the best training for professionals. Our
            training is tailor-made to suit the needs of individual
            organisations to ensure effective equipping of employees, relevant
            to their industry.
          </p>
        </div>
        {/* <!-- end training --> */}

        <div class="research">
          <h4>Research</h4> <br />
          <p>
            This service is rendered within our Research division. In this
            division we provide feedback to the corporate and training
            institutions in regard to changing trends, demands and gaps within
            the market.
          </p>
        </div>
      </section>
    </div>
  )
}

export default employer
