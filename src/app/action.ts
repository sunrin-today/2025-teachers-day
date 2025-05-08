'use server';

import prisma from '@/lib/prisma';

interface SaveBody {
  name:        string;
  teacherName: string;
  content:     string;
}

function validate(body: SaveBody) {
  const {
    name,
    teacherName,
    content,
  } = body;

  if (name.trim().length === 0 || teacherName.trim().length === 0 || content.trim().length === 0) {
    return false;
  }

  if (name.length > 14 || teacherName.length > 4 || content.length > 600) {
    return false;
  }

  return true;
}

export async function save(body: SaveBody) {
  const {
    name,
    teacherName,
    content,
  } = body;

  await prisma.letter.create({ data: {
    name, teacherName, content,
  } });

  if (validate(body)) {
    return { success: true };
  } else {
    return { success: false };
  }
}
