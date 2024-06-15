import { Link } from 'react-router-dom';
import { Accordion, Card } from 'flowbite-react';
import Attendance from '../component/customUI/Attendance';
export default function Lecture() {
	return (
		<>
			<Attendance />
			<main className='p-8 flex gap-8'>
				<Card className='flex flex-col gap-4 flex-1 border-r'>
					<h2 className='text-2xl font-medium bg-gray text-black p-2 rounded'>
						Lecture on Computer Science
					</h2>
					<video
						src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
						controls
						className='w-full'
					></video>
					<p>
						In this Computer Science lecture, students will delve into the
						foundational principles of computing and the essential concepts that
						drive modern technology. The lecture will cover topics such as
						algorithms, data structures, and programming paradigms, providing a
						comprehensive understanding of how computer systems solve complex
						problems. Through engaging discussions and practical examples,
						students will learn to think computationally and develop skills that
						are crucial for designing efficient and effective software
						solutions.
					</p>
					<p>
						Additionally, the lecture will explore the latest advancements in
						fields like artificial intelligence, cybersecurity, and data
						science, highlighting the impact of these technologies on various
						industries. By examining real-world applications and case studies,
						students will gain insights into the practical uses of computer
						science and the ethical considerations involved. This lecture aims
						to inspire and equip students with the knowledge and skills needed
						to thrive in an increasingly digital world.
					</p>
				</Card>
				<div className='w-1/2'>
					<Accordion>
						<Accordion.Panel>
							<Accordion.Title>Section 1</Accordion.Title>
							<Accordion.Content className='p-0'>
								<ul>
									<li className='p-4 border broder-gray-500 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer'>
										<Link to='/' className='block w-full h-full'>
											Lecture 1: Introduction to Computer Science
										</Link>
									</li>
									<li className='p-4 border broder-gray-500 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer'>
										<Link to='/' className='block w-full h-full'>
											Lecture 2: Basic Information on Computer Science
										</Link>
									</li>
									<li className='p-4 border broder-gray-500 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer'>
										<Link to='/' className='block w-full h-full'>
											Lecture 3: History of Computer Science
										</Link>
									</li>
								</ul>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>Section 2</Accordion.Title>
							<Accordion.Content className='p-0'>
								<ul>
									<li className='p-4 border broder-gray-500 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer'>
										<Link to='/' className='block w-full h-full'>
											Lecture 4: Computer Science Fundamentals
										</Link>
									</li>
									<li className='p-4 border broder-gray-500 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer'>
										<Link to='/' className='block w-full h-full'>
											Lecture 5: Algorithms and Data Structures
										</Link>
									</li>
									<li className='p-4 border broder-gray-500 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer'>
										<Link to='/' className='block w-full h-full'>
											Lecture 6: Programming Paradigms
										</Link>
									</li>
								</ul>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>Section 3</Accordion.Title>
							<Accordion.Content className='p-0'>
								<ul>
									<li className='p-4 border broder-gray-500 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer'>
										<Link to='/' className='block w-full h-full'>
											Lecture 7: Artificial Intelligence and Machine Learning
										</Link>
									</li>
									<li className='p-4 border broder-gray-500 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer'>
										<Link to='/' className='block w-full h-full'>
											Lecture 8: Cybersecurity and Data Privacy
										</Link>
									</li>
									<li className='p-4 border broder-gray-500 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer'>
										<Link to='/' className='block w-full h-full'>
											Lecture 9: Big Data and Data Science
										</Link>
									</li>
								</ul>
							</Accordion.Content>
						</Accordion.Panel>
					</Accordion>
				</div>
			</main>
		</>
	);
}
