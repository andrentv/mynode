import { getRepository }from 'typeorm'
import { Bill } from "../entity/Bill"
import { Request, Response } from "express"


export const getBills = async (request: Request, response: Response) => {
	const bills = await getRepository(Bill).find()
	return response.json(bills)
};


export const getBill = async (request: Request, response: Response) => {
	const { id } = request.params
	const bill = await getRepository(Bill).findOne(id)
	return response.json(bill)
};


export const saveBill = async (request: Request, response: Response) => {
	const bill = await getRepository(Bill).save(request.body)
	return response.json(bill)
}

export const updateBill = async (request: Request, response: Response) => {
	const { id } = request.params
	
	const bill = await getRepository(Bill).update(id, request.body)
	
	if (bill.affected ===1) {
		const billUpdated = await getRepository(Bill).findOne(id)
		return response.json(billUpdated)		
	}
 	
 	return response.status(404).json({ message: 'Bill not found'})
};

export const finishedBill = async (request: Request, response: Response) => {
	const { id } = request.params
	
	const bill = await getRepository(Bill).update(id, {
	 	finished: true
	})
	
	if (bill.affected === 1) {
		const billUpdated = await getRepository(Bill).findOne(id)
		return response.json({ message: "Bill paid" })		
	}
 	
 	return response.status(404).json({ message: 'Bill not found'})
};



export const removeBill = async (request: Request, response: Response) => {
	const { id } = request.params
	
	const bill = await getRepository(Bill).delete(id)
	
	
	if (bill.affected === 1) {
		const billUpdated = await getRepository(Bill).findOne(id)
		return response.json({ message: "Bill removed" })		
	}
 	
 	return response.status(404).json({ message: 'Bill not found'})
};


