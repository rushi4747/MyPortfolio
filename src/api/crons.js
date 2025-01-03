// export default function handler(req, res) {
//     res.status(200).end('Hello Cron!');
//   }
  // api/cron-job.js
module.exports = async (req, res) => {
    // Check the Authorization header for the correct CRON_SECRET
    const cronSecret = process.env.CRON_SECRET;
    const authorizationHeader = req.headers.get('Authorization'); // Vercel's request headers
    
    if (authorizationHeader !== `Bearer ${cronSecret}`) {
      // If the authorization fails, return a 401 Unauthorized response
      return res.status(401).end('Unauthorized');
    }
  
    // Your cron job logic goes here
    console.log('Cron job triggered successfully at', new Date().toISOString());
  
    // Respond with success
    return res.status(200).json({ message: 'Cron job executed successfully' });
  };
  