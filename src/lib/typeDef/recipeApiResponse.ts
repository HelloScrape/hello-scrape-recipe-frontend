export interface RecipeResponse {
	data: Recipe[];
	error: unknown;
	imageUrl: string;
	page?: number;
	pageSize?: number;
	total?: number;
}

export interface Recipe {
	_id: string;
	recipeName: string;
	pageBegin: number;
	pageEnd: number;
	weekName: string;
	fromPdf: string;
	language: string;
	images: string[];
	description: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
