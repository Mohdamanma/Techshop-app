
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://irgextpzdxzvqgxxzlry.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const Supabase = createClient(supabaseUrl, supabaseKey)

export default Supabase