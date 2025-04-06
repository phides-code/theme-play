import path from 'path';
import fs from 'fs/promises';
import { Request, Response } from 'express';

const getThemeData = async (_: Request, res: Response): Promise<void> => {
    try {
        const filePath = path.join(__dirname, '../data.json');
        const fileContent = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(fileContent);

        res.status(200).json(jsonData);
    } catch (error: any) {
        console.log('getThemeData caught error: ');
        console.log(error.message);
        res.status(500).json({ error: 'Failed to read JSON' });
    }
};

export default getThemeData;
