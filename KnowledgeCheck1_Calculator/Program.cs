﻿using System;

namespace KnowledgeCheck1_Calculator
{
	class Program
	{
		static void Main(string[] args)
		{

			Console.WriteLine("Hello. Press 1 for addition, 2 for subtraction, 3 for multiplication, and 4 for division.");

			var input = Console.ReadLine();
			var calculator = new Calculator();

			switch (input)
			{
				case "1":
					{
						try
						{
							(int number1, int number2) = GetNumbers("Enter 2 integers to add.");
							Console.Write($"{number1} + {number2} = ");
							Console.Write(calculator.Add(number1, number2));
						}
						catch
						{
							Console.WriteLine("Addition failed.");
						}
					}

					//var addNumber1 = Console.ReadLine();
					//var addNumber2 = Console.ReadLine();

					//if (int.TryParse(addNumber1, out int addNumOne) && int.TryParse(addNumber2, out int addNumTwo))
					//{
					//    Console.Write($"{addNumber1} + {addNumber2} = ");
					//    Console.Write(calculator.Add(addNumOne, addNumTwo));
					//}
					//else
					//{
					//    Console.WriteLine("One or more of the numbers is not an int");
					//}
					break;

				case "2":
					{
						try
						{
							(int number1, int number2) = GetNumbers("Enter 2 integers to subtract.");
							Console.Write($"{number1} - {number2} = ");
							Console.Write(calculator.Subtract(number1, number2));
						}
						catch
						{
							Console.WriteLine("Subtraction failed.");
						}
					}


					//var subtractNumber1 = Console.ReadLine();
					//var subtractNumber2 = Console.ReadLine();

					//if (int.TryParse(subtractNumber1, out int subNumOne) && int.TryParse(subtractNumber2, out int subNumTwo))
					//{
					//	Console.Write($"{subtractNumber1} - {subtractNumber2} = ");
					//	Console.Write(calculator.Subtract(subNumOne, subNumTwo));
					//}
					//else
					//{
					//	Console.WriteLine("One or more of the numbers is not an int");
					//}
					break;

				case "3":
					// Add code here
					{
						try
						{
							(int number1, int number2) = GetNumbers("Enter 2 integers to multiply.");
							Console.Write($"{number1} * {number2} = ");
							Console.Write(calculator.Multiply(number1, number2));
						}
						catch
						{
							Console.WriteLine("Multiplication failed.");
						}
					}

					//Console.WriteLine("Enter 2 integers to multiply");
					//var multiplyNumber1string = Console.ReadLine();
					//var multiplyNumber2string = Console.ReadLine();
					//if (int.TryParse(multiplyNumber1string, out int multiplyNumber1) && int.TryParse(multiplyNumber2string, out int multiplyNumber2))
					//{
					//	Console.Write($"{multiplyNumber1} * {multiplyNumber2} = ");
					//	Console.Write(calculator.Multiply(multiplyNumber1, multiplyNumber2));
					//}
					//else
					//{
					//	Console.WriteLine("One or more of the numbers is not an int");
					//}
					break;

				case "4":
					{
						try
						{
							(int number1, int number2) = GetNumbers("Enter 2 integers to divide.");
							Console.Write($"{number1} / {number2} = ");
							Console.Write(calculator.Divide(number1, number2));
						}
						catch
						{
							Console.WriteLine("Division failed.");
						}
					}


					//Console.WriteLine("Enter 2 integers to divide");
					//var divideNumber1 = Console.ReadLine();
					//var divideNumber2 = Console.ReadLine();

					//if (double.TryParse(divideNumber1, out double divNumOne) && double.TryParse(divideNumber2, out double divNumTwo))
					//{
					//	Console.Write($"{divideNumber1} / {divideNumber2} = ");
					//	Console.Write(calculator.Divide(divNumOne, divNumTwo));
					//}
					//else
					//{
					//	Console.WriteLine("One or more of the numbers is not an int");
					//}
					break;

				default:
					Console.WriteLine("Unknown input.");
					break;
			}
		}


		static (int, int) GetNumbers(string message)
		{
			Console.WriteLine(message);
			Console.WriteLine("Enter the first number: ");
			var firsttext = Console.ReadLine();
			Console.WriteLine("Enter the second number: ");
			var secondtext = Console.ReadLine();

			if (int.TryParse(firsttext, out int first) && int.TryParse(secondtext, out int second))
			{
				return (first, second);
			}
			else
			{
				Console.WriteLine("One or more of the numbers is not an int.");
				throw new Exception();
			}
		}
	}
}