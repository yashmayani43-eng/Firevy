import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import CompanySection from '../src/models/CompanySection.js';
import TeamMember from '../src/models/TeamMember.js';

async function updateLeadershipData() {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/firevy_co';
  console.log('Connecting to:', uri);
  await mongoose.connect(uri);
  console.log('Connected to MongoDB');

  // 1. Update about-firevy
  const aboutSection = await CompanySection.findOne({ slug: 'about-firevy' });
  if (aboutSection) {
    console.log('Updating about-firevy...');
    const updatedContent = {
      ...(aboutSection.content || {}),
      culture: {
        ...(aboutSection.content?.culture || {}),
        image: '/images/our_culture.JPG',
        images: ['/images/our_culture.JPG']
      },
      leadership: {
        heading: 'Our Leadership',
        subheading: 'The outlook, passion and experience of our leaders guides Firevy.Co.',
        leaders: [
          {
            name: 'Mr. Tushil Mayani',
            designation: 'CEO & Co-Founder',
            image: '/images/Tushil_mayani.JPG',
            linkedin: 'https://linkedin.com'
          },
          {
            name: 'Mr. Yash Mayani',
            designation: 'CTO & Co-Founder',
            image: '/images/Yash_Mayani.JPG',
            linkedin: 'https://linkedin.com'
          }
        ]
      }
    };
    aboutSection.content = updatedContent;
    aboutSection.publishedData = {
      ...(aboutSection.publishedData || {}),
      content: updatedContent
    };
    aboutSection.draftData = {
      ...(aboutSection.draftData || {}),
      content: updatedContent
    };
    aboutSection.markModified('content');
    aboutSection.markModified('publishedData');
    aboutSection.markModified('draftData');
    await aboutSection.save();
    console.log('about-firevy updated successfully');
  }

  // 2. Update ceo-message
  const ceoSection = await CompanySection.findOne({ slug: 'ceo-message' });
  if (ceoSection) {
    console.log('Updating ceo-message...');
    ceoSection.heroImage = '/images/Tushil_mayani.JPG';
    const updatedContent = {
      ...(ceoSection.content || {}),
      ceoName: 'Mr. Tushil Mayani',
      ceoDesignation: 'CEO & Co-Founder',
      ceoImage: '/images/Tushil_mayani.JPG',
      quoteAuthor: 'Mr. Tushil Mayani',
      quoteAuthorRole: 'CEO',
      signoffName: 'Mr. Tushil Mayani',
      signoffRole: 'CEO',
      signoffCompany: 'Firevy.Co'
    };
    ceoSection.content = updatedContent;
    ceoSection.publishedData = {
      ...(ceoSection.publishedData || {}),
      heroImage: '/images/Tushil_mayani.JPG',
      content: updatedContent
    };
    ceoSection.draftData = {
      ...(ceoSection.draftData || {}),
      heroImage: '/images/Tushil_mayani.JPG',
      content: updatedContent
    };
    ceoSection.markModified('content');
    ceoSection.markModified('publishedData');
    ceoSection.markModified('draftData');
    await ceoSection.save();
    console.log('ceo-message updated successfully');
  }

  // 3. Update our-team
  const ourTeamSection = await CompanySection.findOne({ slug: 'our-team' });
  if (ourTeamSection) {
    console.log('Updating our-team...');
    ourTeamSection.heroImage = '/images/our-team-hero.svg';
    const updatedContent = {
      ...(ourTeamSection.content || {}),
      managementHeading: 'Management Team',
      ceo: {
        name: 'Mr. Tushil Mayani',
        role: 'CEO & Co-Founder',
        image: '/images/Tushil_mayani.JPG',
        linkedin: 'https://linkedin.com',
        messageHeading: 'CEO Message',
        paragraph1: "Welcome to Firevy.Co— a hub where ingenuity meets ambition. As the CEO, I firmly believe that leadership is not just about steering the ship but about inspiring every hand on deck to innovate, dream, and achieve. Our success stems from a shared commitment to excellence, where each solution is crafted with purpose and passion. At Firevy.Co, we don't merely adapt to change; we define it. By blending cutting-edge technology with human ingenuity, we create software solutions that empower businesses and individuals alike. This is not just a company; it's a vision brought to life by a team that dares to dream bigger every day.",
        paragraph2: "Never stop believing in the power of technology that can change the world. One Revolutionary idea... One brilliant Invention can enlighten billions of the Human lives. Nothing is Impossible when you Dream it & believe it you can Do it. Together, let us embrace the challenges and opportunities. Thank you for trusting us to be your partner in progress. Together, we are not just building software —we are creating a legacy of innovation and impact.",
        paragraphs: [
          "Welcome to Firevy.Co— a hub where ingenuity meets ambition. As the CEO, I firmly believe that leadership is not just about steering the ship but about inspiring every hand on deck to innovate, dream, and achieve. Our success stems from a shared commitment to excellence, where each solution is crafted with purpose and passion. At Firevy.Co, we don't merely adapt to change; we define it. By blending cutting-edge technology with human ingenuity, we create software solutions that empower businesses and individuals alike. This is not just a company; it's a vision brought to life by a team that dares to dream bigger every day.",
          "Never stop believing in the power of technology that can change the world. One Revolutionary idea... One brilliant Invention can enlighten billions of the Human lives. Nothing is Impossible when you Dream it & believe it you can Do it. Together, let us embrace the challenges and opportunities. Thank you for trusting us to be your partner in progress. Together, we are not just building software —we are creating a legacy of innovation and impact."
        ]
      },
      cto: {
        name: 'Mr. Yash Mayani',
        role: 'CTO & Co-Founder',
        image: '/images/Yash_Mayani.JPG',
        linkedin: 'https://linkedin.com',
        messageHeading: 'CTO Message',
        paragraph1: "At Firevy.Co, technology is not just a means to an end—it's the essence of our identity and the foundation of our future. As the CTO, my mission is to push the boundaries of innovation, ensuring that every line of code we write and every solution we deliver drives meaningful impact. Our approach is simple yet profound: embrace challenges as opportunities and ideas as catalysts for change. By staying at the forefront of technological advancements and fostering a culture of continuous learning, we empower businesses to thrive in a dynamic digital landscape. Crafting success stories from startups to Fortune 500 stalwarts.",
        paragraph2: "Our dedication to user-centric design and cutting-edge solutions has garnered prestigious accolades. Innovation is a journey, and at Firevy.Co, we walk that path with purpose and passion, transforming visions into reality and possibilities into achievements. Thank you for trusting us as your technology partner. Together, we are building a smarter, more connected happy world.",
        paragraphs: [
          "At Firevy.Co, technology is not just a means to an end—it's the essence of our identity and the foundation of our future. As the CTO, my mission is to push the boundaries of innovation, ensuring that every line of code we write and every solution we deliver drives meaningful impact. Our approach is simple yet profound: embrace challenges as opportunities and ideas as catalysts for change. By staying at the forefront of technological advancements and fostering a culture of continuous learning, we empower businesses to thrive in a dynamic digital landscape. Crafting success stories from startups to Fortune 500 stalwarts.",
          "Our dedication to user-centric design and cutting-edge solutions has garnered prestigious accolades. Innovation is a journey, and at Firevy.Co, we walk that path with purpose and passion, transforming visions into reality and possibilities into achievements. Thank you for trusting us as your technology partner. Together, we are building a smarter, more connected happy world."
        ]
      },
      leadershipHeading: 'Leadership Team',
      leadershipTeam: [
        { name: 'Sahaj Maniya', role: 'HR Lead', image: '/images/Sahaj_Maniya.JPG', objectPosition: '50% 85%' },
        { name: 'Purvi Pipaliya', role: 'QA Lead', image: '/images/Purvi.JPG', objectPosition: 'center center' },
        { name: 'Rutvik Vastarpara', role: 'MERN Lead', image: '/images/Rutvik.JPG', objectPosition: 'center center' },
        { name: 'Hiren Rajani', role: 'Sr. BDR - Service', image: '/images/Hiren.JPG', objectPosition: 'center center' }
      ],
      firevianSay: {
        heading: 'What Our Firevian Says',
        name: 'Sahaj Maniya',
        role: 'Project Manager',
        avatar: '/images/Sahaj_Maniya.JPG',
        objectPosition: '50% 85%',
        quote: "I am proud to be working for a company like Firevy.Co that values honesty and a fair attitude to all which has also contributed to a very valuable and delightful experience. The work culture and the integrity of the company's management are remarkable. In Firevy.Co, we get all the freedom to think out-of-the-box and take complete ownership of the work we do. Being a client-focused company, Firevy.Co makes us understand the clients' requirements easily so that the work can be coordinated effectively. There are always opportunities to learn and no limitations to scale new heights in this organization."
      }
    };
    ourTeamSection.content = updatedContent;
    ourTeamSection.publishedData = {
      ...(ourTeamSection.publishedData || {}),
      heroImage: '/images/our-team-hero.svg',
      content: updatedContent
    };
    ourTeamSection.draftData = {
      ...(ourTeamSection.draftData || {}),
      heroImage: '/images/our-team-hero.svg',
      content: updatedContent
    };
    ourTeamSection.markModified('content');
    ourTeamSection.markModified('publishedData');
    ourTeamSection.markModified('draftData');
    await ourTeamSection.save();
    console.log('our-team updated successfully');
  }

  // 4. Update TeamMember collection
  await TeamMember.updateOne(
    { name: { $regex: /Kumaril/i } },
    {
      $set: {
        name: 'Mr. Tushil Mayani',
        designation: 'CEO & Co-Founder',
        image: '/images/Tushil_mayani.JPG',
        bio: 'Leading strategic vision, innovation, and technological excellence at Firevy.Co.'
      }
    }
  );

  await TeamMember.updateOne(
    { name: { $regex: /Rajendra/i } },
    {
      $set: {
        name: 'Mr. Yash Mayani',
        designation: 'CTO & Co-Founder',
        image: '/images/Yash_Mayani.JPG',
        bio: 'Leading high-concurrency cloud architecture, modern full-stack systems, and engineering squads.'
      }
    }
  );

  console.log('TeamMember collection updated successfully');
  await mongoose.disconnect();
  console.log('All migrations completed!');
}

updateLeadershipData().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
