import { useEffect } from 'react';
import { MainLayout } from '../components/Layouts/MainLayout';
import styles from '../public/styles/all.module.css'
import documentSetTitle from '../components/Title/documentSetTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaHandPointer, FaCheck, FaTruck } from 'react-icons/fa';

export default function Home() {
  documentSetTitle('Home | TitaNiunP')

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, [])

  return (
    <MainLayout>
      <div className={styles.pageContent}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <img src="./titaniunp-search-animation.gif" alt="TitaNiunP Logo" />
            <div>
              <h1>TitaNiunP</h1>
              <span>Your <b>trusted store</b></span>
            </div>
          </div>
        <a href="#discoverus" className={styles.pageButtonCenter}>Discover Us</a>
        </div>
        <h2>Buy now! With these simple steps</h2>
        <br />
        <br />
        <div className={styles.pageSteps}>
          <div className={styles.pageStep}>
            <span>1</span>
            <div className={styles.pageStepIcon}>
              <FaHandPointer size={'3em'} color={'ffc701'}></FaHandPointer>
            </div>
            <p>Go to the link of our <b><a href="#" target="__blank">official Amazon online store</a></b></p>
          </div>
          <div className={styles.pageLineVertical}></div>
          <div className={styles.pageStep}>
            <span>2</span>
            <div className={styles.pageStepIcon}>
              <FaCheck size={'3em'} color={'ffc701'}></FaCheck>
            </div>
            <p>Choose a product that you like and fits your needs</p>
          </div>
          <div className={styles.pageLineVertical}></div>
          <div className={styles.pageStep}>
            <span>3</span>
            <div className={styles.pageStepIcon}>
                <FaTruck size={'3em'} color={'ffc701'}></FaTruck>
            </div>
            <p>Pay the chosen one, and then it will come to your house! 🎊</p>
          </div>
        </div>
        <br />
        <br />
        <h2>About Us</h2>
        <br />
        <br />
        <div className={styles.pageGrid} id="discoverus">
          <div data-aos="zoom-in">
            <h4>Who we are?</h4>
            <p>We are a group of people who are starting an online sales project, each one of us is focused on giving our best to provide a quality service. We have a single task for each member in order to fulfill perfectly each of the steps to follow to get your product in the best possible time. We have 24/7 technical support although we assure you that you will not have to use it because our purchasing method promises to be very simple. We are not just a company but people who want to meet the expectations of our customers.</p>
          </div>
          <div data-aos="zoom-in">
            <h4>What do we do?</h4>
            <p>We are dedicated to selling products that you will use every day and you can buy them without leaving your home. We are focused on supplying our customers with all the essentials for day to day living. Our goal is that you get the best quality at the lowest price in the market. We will provide you with a growing catalog where you will be able to find what you need. Part of the staff will be in charge of following up with each customer, with the purpose of offering you the best deals according to your shopping style.</p>
          </div>
          <div data-aos="zoom-in">
            <h4>What are we going to sell?</h4>
            <p>We will sell items that meet basic and essential needs. Some examples are: brooms, carpets, glasses, etc. As the company grows we will be adding products based on your feedback. Everything we will offer is quality guaranteed. We will have a large stock so we will offer wholesale in case you are interested in reselling.</p>
          </div>
          <div data-aos="zoom-in">
            <h4>What is our objective?</h4>
            <p>Our main objective is focused on offering products that everyone uses in their homes, you from your cell phone or computer can acquire at low cost those things you have in mind but do not know where to go to get them. Another of our goals is to maintain a long term customer-seller relationship. We will also conduct surveys to know what products to add to our catalog.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

