import type { NextPage } from "next";
export const config = {
  unstable_runtimeJS: false,
};
const Home: NextPage = () => {
  return (
    <section className='section pb-5'>
      <div className='home'>
        <div className='row'>
          <div className='col-md-12' data-aos='fade-up'>
            <h1>Hi! , Im Mootassam Boughdiri</h1>
            <p className='mb-5'>
              I like making fun, interactive things with code. I also talk &
              write about those things.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
