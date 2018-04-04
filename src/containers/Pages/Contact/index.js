/* eslint-disable max-len, import/no-named-as-default */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import Instagram from '../../../components/Instagram';

export class Contact extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="page-fade-in">
        <Helmet title="Contact" />
        <div className="container  tal  ph4-sm">
          <div className="row">
            <div className="col-sm-14">
              <h1 className="black  title-font  t5  pt5  pt4-sm  pv4  pb3-sm">Contact</h1>
              <p>Get involved. We&apos;re constantly on the look out for new members for the Rendah team.</p>
              <ul>
                <li className="pv1">Are you a listener and want to start writing articles?</li>
                <li className="pv1">Are you a developer and want to help us code the site/side projects?</li>
                <li className="pv1">Are you an artist and want a Rendah feature/review/interview?</li>
                <li className="pv1">Are you a visual artist and want to promote artwork on the site?</li>
              </ul>
              <p>Even if you&apos;re none of the above and want to get involved, we encourage you to get in touch!<br /><br /></p>
              <p>Please email: <a href="mailto:info@rendahmag.com">info@rendahmag.com</a></p>
            </div>
            <div className="col-sm-10">
              <div className="container-fluid  pv4">
                <div className="row">
                  <div className="col-sm-24  pt4">
                    <Instagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Contact;
