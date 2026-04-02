import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function generateStudyPlan(
  subjects: string[],
  hoursPerWeek: number,
  difficultyLevel: string,
  availableDays: string[]
) {
  const prompt = `Create a weekly study plan for the following subjects: ${subjects.join(', ')}. 
  Study time: ${hoursPerWeek} hours per week. 
  Difficulty level: ${difficultyLevel}. 
  Available days: ${availableDays.join(', ')}.
  
  Format as a structured weekly plan with specific tasks and time allocations.`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1000,
    temperature: 0.7,
  })

  return completion.choices[0]?.message?.content || 'Unable to generate study plan'
}

export async function analyzeProgress(studyLogs: any[]) {
  const prompt = `Analyze this study progress data and provide insights: ${JSON.stringify(studyLogs)}`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 500,
    temperature: 0.7,
  })

  return completion.choices[0]?.message?.content || 'Unable to analyze progress'
}

export async function suggestTips(subject: string) {
  const prompt = `Provide 3-5 specific study tips for ${subject}. Focus on practical, actionable advice for students.`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 400,
    temperature: 0.7,
  })

  return completion.choices[0]?.message?.content || 'Unable to generate tips'
}

export async function moderateContent(content: string) {
  try {
    const moderation = await openai.moderations.create({
      input: content,
    })
    
    return {
      flagged: moderation.results[0]?.flagged || false,
      categories: moderation.results[0]?.categories || {},
    }
  } catch (error) {
    console.error('Content moderation failed:', error)
    return { flagged: false, categories: {} }
  }
}
