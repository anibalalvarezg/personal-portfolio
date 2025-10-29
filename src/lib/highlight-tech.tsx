export function highlightTechnologies(text: string) {
  const technologies = [
    'Angular', 'TypeScript', 'TailwindCSS', 'NGXS', 'Python', 'Scrapy', 
    'Redis', 'SQS', 'Docker', 'AWS', 'ECS', 'ECR', 'Bootstrap', 'SCSS',
    'WebSockets', 'HTML', 'Jira', 'Confluence', 'Scrum', 'Kanban',
    'BFF', 'Machine Learning', 'Deep Learning', 'Inteligencia Artificial',
    'Artificial Intelligence', 'Data Science', 'Ciencia de Datos'
  ];

  const regex = new RegExp(`\\b(${technologies.join('|')})(?:\\s+\\d+\\+?)?\\b`, 'gi');
  
  const parts = [];
  let lastIndex = 0;
  let match;
  
  const tempText = text;
  const matches = [...tempText.matchAll(regex)];
  
  matches.forEach((match, index) => {
    const matchStart = match.index!;
    const matchEnd = matchStart + match[0].length;
    
    if (matchStart > lastIndex) {
      parts.push(text.substring(lastIndex, matchStart));
    }
    
    parts.push(
      <span key={index} className="font-semibold text-foreground">
        {match[0]}
      </span>
    );
    
    lastIndex = matchEnd;
  });
  
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
}

