const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    // Replace this with your actual build hook URL from Netlify
    const BUILD_HOOK = process.env.NETLIFY_BUILD_HOOK;
    
    if (!BUILD_HOOK) {
      throw new Error('Build hook URL not configured');
    }

    // Trigger the build
    const response = await fetch(BUILD_HOOK, { method: 'POST' });
    
    if (!response.ok) {
      throw new Error('Failed to trigger build');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Build triggered successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to trigger build', error: error.message })
    };
  }
}