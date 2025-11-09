
import { useState } from 'react';
import { Filter, Heart, MessageSquare, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mockPosts = [
  {
    id: 1,
    author: { name: 'Priya Verma', username: '@priya_cs', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    content: 'Looking for teammates for the upcoming hackathon! Need someone good with React and Node.js. DM me!',
    department: 'Computer Science',
    tags: ['React', 'Hackathon'],
    likes: 24,
    comments: 8,
    timestamp: '2h ago'
  },
  {
    id: 2,
    author: { name: 'Arjun Patel', username: '@arjun_mech', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    content: 'Just finished our robotics project! Check out the demo video.',
    department: 'Mechanical Engineering',
    tags: ['Robotics', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    likes: 56,
    comments: 12,
    timestamp: '5h ago'
  },
  {
    id: 3,
    author: { name: 'Sneha Gupta', username: '@sneha_biz', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    content: 'Anyone interested in starting a business club? We could organize workshops and invite entrepreneurs!',
    department: 'Business Administration',
    tags: ['Entrepreneurship', 'Business'],
    likes: 31,
    comments: 15,
    timestamp: '1d ago'
  }
];

export default function Home() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="sticky top-0 bg-background/95 backdrop-blur border-b border-border z-10 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Home</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Filter size={20} className="mr-2" />
              {filter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setFilter('All')}>All Posts</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter('Computer Science')}>Computer Science</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter('Mechanical Engineering')}>Mechanical Engineering</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter('Business Administration')}>Business Administration</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="divide-y divide-border">
        {mockPosts.map(post => (
          <article key={post.id} className="p-4 hover:bg-accent/50 transition-colors">
            <div className="flex gap-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground">{post.author.name}</span>
                  <span className="text-sm text-muted-foreground">{post.author.username}</span>
                  <span className="text-sm text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                </div>
                <div className="text-xs text-primary mb-2">{post.department}</div>
                <p className="text-foreground mb-3">{post.content}</p>
                
                {post.image && (
                  <img 
                    src={post.image} 
                    alt="Post content"
                    className="rounded-lg w-full mb-3 object-cover max-h-96"
                  />
                )}
                
                <div className="flex gap-2 mb-3">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-muted-foreground">
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Heart size={18} />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <MessageSquare size={18} />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}