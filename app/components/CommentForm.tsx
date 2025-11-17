'use client';

import { useState, type FormEvent } from 'react';

export default function CommentForm({ postId }: { postId: string }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/createComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          comment,
          postId,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName('');
        setComment('');
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Write your comment..."
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>

      {submitted && (
        <p className="text-green-600">Thanks! Your comment is awaiting approval.</p>
      )}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
