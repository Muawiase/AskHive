import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envPath = './.env';
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  if (line.includes('=')) {
    const [key, ...rest] = line.split('=');
    env[key.trim()] = rest.join('=').trim();
  }
});

const supabase = createClient(env['VITE_SUPABASE_URL'], env['VITE_SUPABASE_ANON_KEY']);

async function test() {
  const userId = 'aec3cc15-7dd6-43d4-b091-735ec14ed294';
  
  console.log("Attempting insert with NEW schema and NULL payment...");
  const { data: insertRes, error: err3 } = await supabase.from('questions').insert({
    user_id: userId,
    title: 'Test Title NULL PAYMENT',
    subject: 'Mathematics',
    level: 'High School',
    description: 'Test description null payment',
    deadline: null,
    payment: null
  }).select();
  console.log("Insert Result:", insertRes, "Error:", err3);
}

test();
